import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

let io: Server;

export const initSocket = (httpServer: HttpServer): void => {
    io = new Server(httpServer, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket: Socket) => {
        console.log(`🔌 Client connected: ${socket.id}`);

        // Admin must emit "join:admin" to receive notifications
        socket.on("join:admin", () => {
            socket.join("admins");
            console.log(`👑 Admin joined: ${socket.id}`);
        });

        socket.on("disconnect", () => {
            console.log(`🔌 Client disconnected: ${socket.id}`);
        });
    });
};

export const notifyAdmins = (newUser: object): void => {
    if (!io) return;

    io.to("admins").emit("notification:new_user", {
        message: "A new user has been created",
        user: newUser,
        timestamp: new Date(),
    });
};
