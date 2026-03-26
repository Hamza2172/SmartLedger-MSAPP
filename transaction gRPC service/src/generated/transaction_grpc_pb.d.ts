// package: transaction
// file: transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as transaction_pb from "./transaction_pb";

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTransaction: ITransactionServiceService_ICreateTransaction;
    getTransaction: ITransactionServiceService_IGetTransaction;
    listTransactions: ITransactionServiceService_IListTransactions;
    updateTransaction: ITransactionServiceService_IUpdateTransaction;
    deleteTransaction: ITransactionServiceService_IDeleteTransaction;
}

interface ITransactionServiceService_ICreateTransaction extends grpc.MethodDefinition<transaction_pb.CreateTransactionRequest, transaction_pb.Transaction> {
    path: "/transaction.TransactionService/CreateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_pb.CreateTransactionRequest>;
    requestDeserialize: grpc.deserialize<transaction_pb.CreateTransactionRequest>;
    responseSerialize: grpc.serialize<transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<transaction_pb.Transaction>;
}
interface ITransactionServiceService_IGetTransaction extends grpc.MethodDefinition<transaction_pb.GetTransactionRequest, transaction_pb.Transaction> {
    path: "/transaction.TransactionService/GetTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_pb.GetTransactionRequest>;
    requestDeserialize: grpc.deserialize<transaction_pb.GetTransactionRequest>;
    responseSerialize: grpc.serialize<transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<transaction_pb.Transaction>;
}
interface ITransactionServiceService_IListTransactions extends grpc.MethodDefinition<transaction_pb.ListTransactionsRequest, transaction_pb.ListTransactionsResponse> {
    path: "/transaction.TransactionService/ListTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_pb.ListTransactionsRequest>;
    requestDeserialize: grpc.deserialize<transaction_pb.ListTransactionsRequest>;
    responseSerialize: grpc.serialize<transaction_pb.ListTransactionsResponse>;
    responseDeserialize: grpc.deserialize<transaction_pb.ListTransactionsResponse>;
}
interface ITransactionServiceService_IUpdateTransaction extends grpc.MethodDefinition<transaction_pb.UpdateTransactionRequest, transaction_pb.Transaction> {
    path: "/transaction.TransactionService/UpdateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_pb.UpdateTransactionRequest>;
    requestDeserialize: grpc.deserialize<transaction_pb.UpdateTransactionRequest>;
    responseSerialize: grpc.serialize<transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<transaction_pb.Transaction>;
}
interface ITransactionServiceService_IDeleteTransaction extends grpc.MethodDefinition<transaction_pb.DeleteTransactionRequest, transaction_pb.DeleteTransactionResponse> {
    path: "/transaction.TransactionService/DeleteTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_pb.DeleteTransactionRequest>;
    requestDeserialize: grpc.deserialize<transaction_pb.DeleteTransactionRequest>;
    responseSerialize: grpc.serialize<transaction_pb.DeleteTransactionResponse>;
    responseDeserialize: grpc.deserialize<transaction_pb.DeleteTransactionResponse>;
}

export const TransactionServiceService: ITransactionServiceService;

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
    createTransaction: grpc.handleUnaryCall<transaction_pb.CreateTransactionRequest, transaction_pb.Transaction>;
    getTransaction: grpc.handleUnaryCall<transaction_pb.GetTransactionRequest, transaction_pb.Transaction>;
    listTransactions: grpc.handleUnaryCall<transaction_pb.ListTransactionsRequest, transaction_pb.ListTransactionsResponse>;
    updateTransaction: grpc.handleUnaryCall<transaction_pb.UpdateTransactionRequest, transaction_pb.Transaction>;
    deleteTransaction: grpc.handleUnaryCall<transaction_pb.DeleteTransactionRequest, transaction_pb.DeleteTransactionResponse>;
}

export interface ITransactionServiceClient {
    createTransaction(request: transaction_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    createTransaction(request: transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    createTransaction(request: transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: transaction_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: transaction_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: transaction_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    listTransactions(request: transaction_pb.ListTransactionsRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: transaction_pb.ListTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: transaction_pb.ListTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    updateTransaction(request: transaction_pb.UpdateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransaction(request: transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransaction(request: transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: transaction_pb.DeleteTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.DeleteTransactionResponse) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: transaction_pb.DeleteTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.DeleteTransactionResponse) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: transaction_pb.DeleteTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.DeleteTransactionResponse) => void): grpc.ClientUnaryCall;
}

export class TransactionServiceClient extends grpc.Client implements ITransactionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTransaction(request: transaction_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public createTransaction(request: transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public createTransaction(request: transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: transaction_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: transaction_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: transaction_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public listTransactions(request: transaction_pb.ListTransactionsRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: transaction_pb.ListTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: transaction_pb.ListTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.ListTransactionsResponse) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: transaction_pb.UpdateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: transaction_pb.DeleteTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_pb.DeleteTransactionResponse) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: transaction_pb.DeleteTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_pb.DeleteTransactionResponse) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: transaction_pb.DeleteTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_pb.DeleteTransactionResponse) => void): grpc.ClientUnaryCall;
}
