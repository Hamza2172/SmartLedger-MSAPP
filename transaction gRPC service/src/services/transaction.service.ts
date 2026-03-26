import * as grpc from "@grpc/grpc-js";
import { prisma } from "../../lib/prisma";
import {
  CreateTransactionRequest,
  DeleteTransactionRequest,
  DeleteTransactionResponse,
  GetTransactionRequest,
  ListTransactionsRequest,
  ListTransactionsResponse,
  Transaction,
  TransactionType,
  UpdateTransactionRequest,
} from "../generated/transaction_pb";
import { TransactionType as prismaTransactionType } from "./../../generated/prisma/client";
// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Maps a Prisma transaction record to the proto Transaction shape */
function toProtoTransaction(record: any): Transaction.AsObject {
  return {
    id: record.id,
    userid: record.userId,
    type:
      record.type === "EXPENSE"
        ? TransactionType.EXPENSE
        : TransactionType.INCOME,
    amount: record.amount,
    currency: record.currency,
    note: record.note ?? "",
    category: record.category ?? "",
    createdat: record.createdAt.toISOString(),
    updatedat: record.updatedAt.toISOString(),
  };
}

// function toProtoTransaction(record: any): Transaction {
//     return Transaction.fromPartial({
//         id: record.id,
//         userId: record.userId,
//         type:
//             record.type === "EXPENSE"
//                 ? TransactionType.EXPENSE
//                 : TransactionType.INCOME,
//         amount: record.amount,
//         currency: record.currency,
//         note: record.note ?? "",
//         category: record.category ?? "",
//         createdAt: record.createdAt.toISOString(),
//         updatedAt: record.updatedAt.toISOString(),
//     });
// }

/** Sends a NOT_FOUND gRPC error */
function notFound(
  callback: grpc.sendUnaryData<any>,
  entity = "Transaction",
  id?: string,
): void {
  callback({
    code: grpc.status.NOT_FOUND,
    message: id ? `${entity} with id "${id}" not found` : `${entity} not found`,
  });
}

/** Sends an INTERNAL gRPC error and logs the original error */
function internalError(
  callback: grpc.sendUnaryData<any>,
  error: unknown,
): void {
  console.error("[TransactionService] Internal error:", error);
  callback({
    code: grpc.status.INTERNAL,
    message: "Internal server error",
  });
}

export async function createTransactionService(
  call: grpc.ServerUnaryCall<CreateTransactionRequest, Transaction>,
  callback: grpc.sendUnaryData<Transaction>,
): Promise<void> {
  try {
    console.log("here ");
    const {
      userid: userId,
      type,
      amount,
      currency,
      note,
      category,
    } = call.request.toObject();
    if (!userId || !currency) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: "userId and currency are required",
      });
    }
    console.log(
      typeof type,
      type,
      userId,
      type !== undefined
        ? type === TransactionType.EXPENSE
          ? prismaTransactionType.EXPENSE
          : prismaTransactionType.INCOME
        : prismaTransactionType.INCOME,
    );
    const record = await prisma.transaction.create({
      data: {
        userId,
        type:
          type !== undefined
            ? type === TransactionType.EXPENSE
              ? prismaTransactionType.EXPENSE
              : prismaTransactionType.INCOME
            : prismaTransactionType.INCOME,
        amount: amount ?? 0,
        currency,
        note: note ?? "",
        category: category ?? "",
      },
    });
    // console.log(record.type);
    callback(null);
  } catch (error) {
    internalError(callback, error);
  }
}

export async function getTransactionService(
  call: grpc.ServerUnaryCall<GetTransactionRequest, Transaction>,
  callback: grpc.sendUnaryData<Transaction>,
): Promise<void> {
  try {
    const { id } = call.request.toObject();
    const record = await prisma.transaction.findUnique({ where: { id } });
    if (!record) {
      return notFound(callback, "Transaction", id);
    }
    callback(null);
  } catch (error) {
    internalError(callback, error);
  }
}

export async function listTransactionService(
  call: grpc.ServerUnaryCall<ListTransactionsRequest, ListTransactionsResponse>,
  callback: grpc.sendUnaryData<ListTransactionsResponse>,
): Promise<void> {
  try {
    const { userid: userId, type, page, limit } = call.request.toObject();

    const take = (limit ?? 10) > 0 ? (limit ?? 10) : 10;
    const skip = (page ?? 0) > 0 ? ((page ?? 0) - 1) * take : 0;

    const where: any = { userId };

    if (type !== undefined) {
      where.type =
        type === TransactionType.EXPENSE
          ? prismaTransactionType.EXPENSE
          : prismaTransactionType.INCOME;
    }

    const records = await prisma.transaction.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },
    });
    console.log(where);
    console.log(skip);
    console.log(take);
    console.log(records);

    const total = await prisma.transaction.count({ where });
    callback(null);
  } catch (error) {
    internalError(callback, error);
  }
}

export async function updateTransactionService(
  call: grpc.ServerUnaryCall<UpdateTransactionRequest, Transaction>,
  callback: grpc.sendUnaryData<Transaction>,
): Promise<void> {
  try {
    const { id, amount, currency, note, category } = call.request.toObject();

    const existing = await prisma.transaction.findUnique({ where: { id } });

    if (!existing) {
      return notFound(callback, "Transaction", id);
    }

    const data: any = {};

    if (amount !== undefined) data.amount = amount;
    if (currency !== undefined && currency !== "") data.currency = currency;
    if (note !== undefined) data.note = note;
    if (category !== undefined) data.category = category;

    const record = await prisma.transaction.update({
      where: { id },
      data,
    });

    callback(null);
  } catch (error) {
    internalError(callback, error);
  }
}

export async function deleteTransactionService(
  call: grpc.ServerUnaryCall<
    DeleteTransactionRequest,
    DeleteTransactionResponse
  >,
  callback: grpc.sendUnaryData<DeleteTransactionResponse>,
): Promise<void> {
  try {
    const { id } = call.request.toObject();

    const existing = await prisma.transaction.findUnique({ where: { id } });

    if (!existing) {
      return notFound(callback, "Transaction", id);
    }

    await prisma.transaction.delete({ where: { id } });

    callback(null);
  } catch (error) {
    internalError(callback, error);
  }
}
