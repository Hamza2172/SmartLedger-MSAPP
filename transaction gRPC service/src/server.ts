import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import * as transactionService from "./services/transaction.service";

const config = {
    port: process.env.GRPC_PORT || "50051",
    host: process.env.GRPC_HOST || "0.0.0.0",
    enableReflection: process.env.ENABLE_REFLECTION === "true",
};

const PROTO_OPTIONS: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

function loadProto(protoFile: string): grpc.GrpcObject {
    const protoPath = path.join(__dirname, "../protos", protoFile);
    const packageDefinition = protoLoader.loadSync(protoPath, PROTO_OPTIONS);
    return grpc.loadPackageDefinition(packageDefinition);
}

const { transaction } = loadProto("transaction.proto") as any;

function createServer(): grpc.Server {
    const server = new grpc.Server();
    server.addService(transaction.TransactionService.service, {
        CreateTransaction: transactionService.createTransactionService,
        GetTransaction: transactionService.getTransactionService,
        ListTransactions: transactionService.listTransactionService,
        UpdateTransaction: transactionService.updateTransactionService,
        DeleteTransaction: transactionService.deleteTransactionService,
    });

    return server;
}

async function startServer(): Promise<void> {
    const server = createServer();
    const address = `${config.host}:${config.port}`;

    return new Promise((resolve, reject) => {
        server.bindAsync(
            address,
            grpc.ServerCredentials.createInsecure(),
            (error, port) => {
                if (error) {
                    console.error("Faild to bind server:", error);
                    reject(error);
                    return;
                }
                console.log(`gRPC server started on ${address}`);
                console.log(`Server bound to port ${port}`);
                resolve();
            },
        );
    });
}

function GracefulShutdown(server: grpc.Server): void {
    const shutdown = (signal: string) => {
        console.log(`Received ${signal}, starting graceful shutdown...`);

        server.tryShutdown((error) => {
            if (error) {
                console.error("Error during shutdown:", error);
                process.exit(1);
            }
            console.log("Server shut down gracefully");
            process.exit(0);
        });

        setTimeout(() => {
            console.warn("Forced shutdown after timeout");
            server.forceShutdown();
            process.exit(1);
        }, 30000);
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
}

startServer()
    .then(() => {
        console.log("Server is ready to accept connections");
    })
    .catch((error) => {
        console.error("Failed to start server: ", error);
        process.exit(1);
    });
