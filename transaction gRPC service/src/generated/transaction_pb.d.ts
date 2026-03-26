// package: transaction
// file: transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Transaction extends jspb.Message { 
    getId(): string;
    setId(value: string): Transaction;
    getUserid(): string;
    setUserid(value: string): Transaction;

    hasType(): boolean;
    clearType(): void;
    getType(): TransactionType | undefined;
    setType(value: TransactionType): Transaction;
    getAmount(): number;
    setAmount(value: number): Transaction;
    getCurrency(): string;
    setCurrency(value: string): Transaction;
    getNote(): string;
    setNote(value: string): Transaction;
    getCategory(): string;
    setCategory(value: string): Transaction;
    getCreatedat(): string;
    setCreatedat(value: string): Transaction;
    getUpdatedat(): string;
    setUpdatedat(value: string): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        id: string,
        userid: string,
        type?: TransactionType,
        amount: number,
        currency: string,
        note: string,
        category: string,
        createdat: string,
        updatedat: string,
    }
}

export class CreateTransactionRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): CreateTransactionRequest;

    hasType(): boolean;
    clearType(): void;
    getType(): TransactionType | undefined;
    setType(value: TransactionType): CreateTransactionRequest;
    getAmount(): number;
    setAmount(value: number): CreateTransactionRequest;
    getCurrency(): string;
    setCurrency(value: string): CreateTransactionRequest;
    getNote(): string;
    setNote(value: string): CreateTransactionRequest;
    getCategory(): string;
    setCategory(value: string): CreateTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionRequest): CreateTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionRequest;
    static deserializeBinaryFromReader(message: CreateTransactionRequest, reader: jspb.BinaryReader): CreateTransactionRequest;
}

export namespace CreateTransactionRequest {
    export type AsObject = {
        userid: string,
        type?: TransactionType,
        amount: number,
        currency: string,
        note: string,
        category: string,
    }
}

export class GetTransactionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
    static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListTransactionsRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): ListTransactionsRequest;

    hasType(): boolean;
    clearType(): void;
    getType(): TransactionType | undefined;
    setType(value: TransactionType): ListTransactionsRequest;
    getPage(): number;
    setPage(value: number): ListTransactionsRequest;
    getLimit(): number;
    setLimit(value: number): ListTransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsRequest): ListTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsRequest;
    static deserializeBinaryFromReader(message: ListTransactionsRequest, reader: jspb.BinaryReader): ListTransactionsRequest;
}

export namespace ListTransactionsRequest {
    export type AsObject = {
        userid: string,
        type?: TransactionType,
        page: number,
        limit: number,
    }
}

export class UpdateTransactionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateTransactionRequest;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): number | undefined;
    setAmount(value: number): UpdateTransactionRequest;

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): string | undefined;
    setCurrency(value: string): UpdateTransactionRequest;

    hasNote(): boolean;
    clearNote(): void;
    getNote(): string | undefined;
    setNote(value: string): UpdateTransactionRequest;

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): string | undefined;
    setCategory(value: string): UpdateTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransactionRequest): UpdateTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransactionRequest;
    static deserializeBinaryFromReader(message: UpdateTransactionRequest, reader: jspb.BinaryReader): UpdateTransactionRequest;
}

export namespace UpdateTransactionRequest {
    export type AsObject = {
        id: string,
        amount?: number,
        currency?: string,
        note?: string,
        category?: string,
    }
}

export class DeleteTransactionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTransactionRequest): DeleteTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTransactionRequest;
    static deserializeBinaryFromReader(message: DeleteTransactionRequest, reader: jspb.BinaryReader): DeleteTransactionRequest;
}

export namespace DeleteTransactionRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListTransactionsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<Transaction>;
    setTransactionsList(value: Array<Transaction>): ListTransactionsResponse;
    addTransactions(value?: Transaction, index?: number): Transaction;
    getTotal(): number;
    setTotal(value: number): ListTransactionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsResponse): ListTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsResponse;
    static deserializeBinaryFromReader(message: ListTransactionsResponse, reader: jspb.BinaryReader): ListTransactionsResponse;
}

export namespace ListTransactionsResponse {
    export type AsObject = {
        transactionsList: Array<Transaction.AsObject>,
        total: number,
    }
}

export class DeleteTransactionResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTransactionResponse): DeleteTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTransactionResponse;
    static deserializeBinaryFromReader(message: DeleteTransactionResponse, reader: jspb.BinaryReader): DeleteTransactionResponse;
}

export namespace DeleteTransactionResponse {
    export type AsObject = {
        success: boolean,
    }
}

export enum TransactionType {
    INCOME = 0,
    EXPENSE = 1,
}
