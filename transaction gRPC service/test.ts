// import * as grpc from "@grpc/grpc-js";
// import * as protoLoader from "@grpc/proto-loader";
// import path from "path";
// import * as transactionService from "/services/transaction.service";

// // ─── Config ───────────────────────────────────────────────────────────────────

// const config = {
//     port: process.env.GRPC_PORT || "50051",
//     host: process.env.GRPC_HOST || "0.0.0.0",
//     enableReflection: process.env.ENABLE_REFLECTION === "true",
// };

// const ADDRESS = `${config.host}:${config.port}`;

// // ─── Proto Loader ─────────────────────────────────────────────────────────────

// const PROTO_OPTIONS: protoLoader.Options = {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
// };

// function loadProto(protoFile: string): grpc.GrpcObject {
//     const protoPath = path.join(__dirname, "../protos", protoFile);
//     const packageDefinition = protoLoader.loadSync(protoPath, PROTO_OPTIONS);
//     return grpc.loadPackageDefinition(packageDefinition);
// }

// // "transaction" matches `package transaction;` in your .proto
// const { transaction } = loadProto("transaction.proto") as any;

// // ─── Server ───────────────────────────────────────────────────────────────────

// function createServer(): grpc.Server {
//     const server = new grpc.Server();

//     server.addService(transaction.TransactionService.service, {
//         CreateTransaction: transactionService.createTransactionService,
//         GetTransaction: transactionService.getTransactionService,
//         ListTransactions: transactionService.listTransactionService,
//         UpdateTransaction: transactionService.updateTransactionService,
//         DeleteTransaction: transactionService.deleteTransactionService,
//     });

//     return server;
// }

// // ─── Start ────────────────────────────────────────────────────────────────────

// async function main(): Promise<void> {
//     const server = createServer();

//     await new Promise<void>((resolve, reject) => {
//         server.bindAsync(
//             ADDRESS,
//             grpc.ServerCredentials.createInsecure(),
//             (err, port) => {
//                 if (err) return reject(err);
//                 console.log(
//                     `✅  TransactionService listening on ${config.host}:${port}`,
//                 );
//                 resolve();
//             },
//         );
//     });

//     // ── Graceful shutdown ──────────────────────────────────────────────────────
//     const shutdown = (signal: string) => {
//         console.log(`\n⚠️  ${signal} received — shutting down...`);
//         server.tryShutdown((err) => {
//             if (err) {
//                 console.error("Shutdown error:", err);
//                 process.exit(1);
//             }
//             console.log("✅  Server stopped cleanly.");
//             process.exit(0);
//         });
//     };

//     process.on("SIGINT", () => shutdown("SIGINT"));
//     process.on("SIGTERM", () => shutdown("SIGTERM"));
// }

// main().catch((err) => {
//     console.error("❌  Failed to start server:", err);
//     process.exit(1);
// });

// {
//     "userId": "123",
//     "type": "INCOME",
//     "amount": 10000,
//     "currency": "EGP",
//     "note": "Salary",
//     "category": "Job"
// }
