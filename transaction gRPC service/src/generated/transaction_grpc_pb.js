// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transaction_pb = require('./transaction_pb.js');

function serialize_transaction_CreateTransactionRequest(arg) {
  if (!(arg instanceof transaction_pb.CreateTransactionRequest)) {
    throw new Error('Expected argument of type transaction.CreateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_CreateTransactionRequest(buffer_arg) {
  return transaction_pb.CreateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_DeleteTransactionRequest(arg) {
  if (!(arg instanceof transaction_pb.DeleteTransactionRequest)) {
    throw new Error('Expected argument of type transaction.DeleteTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_DeleteTransactionRequest(buffer_arg) {
  return transaction_pb.DeleteTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_DeleteTransactionResponse(arg) {
  if (!(arg instanceof transaction_pb.DeleteTransactionResponse)) {
    throw new Error('Expected argument of type transaction.DeleteTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_DeleteTransactionResponse(buffer_arg) {
  return transaction_pb.DeleteTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_GetTransactionRequest(arg) {
  if (!(arg instanceof transaction_pb.GetTransactionRequest)) {
    throw new Error('Expected argument of type transaction.GetTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetTransactionRequest(buffer_arg) {
  return transaction_pb.GetTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_ListTransactionsRequest(arg) {
  if (!(arg instanceof transaction_pb.ListTransactionsRequest)) {
    throw new Error('Expected argument of type transaction.ListTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_ListTransactionsRequest(buffer_arg) {
  return transaction_pb.ListTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_ListTransactionsResponse(arg) {
  if (!(arg instanceof transaction_pb.ListTransactionsResponse)) {
    throw new Error('Expected argument of type transaction.ListTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_ListTransactionsResponse(buffer_arg) {
  return transaction_pb.ListTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_Transaction(arg) {
  if (!(arg instanceof transaction_pb.Transaction)) {
    throw new Error('Expected argument of type transaction.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_Transaction(buffer_arg) {
  return transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_UpdateTransactionRequest(arg) {
  if (!(arg instanceof transaction_pb.UpdateTransactionRequest)) {
    throw new Error('Expected argument of type transaction.UpdateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_UpdateTransactionRequest(buffer_arg) {
  return transaction_pb.UpdateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionServiceService = exports.TransactionServiceService = {
  createTransaction: {
    path: '/transaction.TransactionService/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_pb.CreateTransactionRequest,
    responseType: transaction_pb.Transaction,
    requestSerialize: serialize_transaction_CreateTransactionRequest,
    requestDeserialize: deserialize_transaction_CreateTransactionRequest,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
  getTransaction: {
    path: '/transaction.TransactionService/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_pb.GetTransactionRequest,
    responseType: transaction_pb.Transaction,
    requestSerialize: serialize_transaction_GetTransactionRequest,
    requestDeserialize: deserialize_transaction_GetTransactionRequest,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
  listTransactions: {
    path: '/transaction.TransactionService/ListTransactions',
    requestStream: false,
    responseStream: false,
    requestType: transaction_pb.ListTransactionsRequest,
    responseType: transaction_pb.ListTransactionsResponse,
    requestSerialize: serialize_transaction_ListTransactionsRequest,
    requestDeserialize: deserialize_transaction_ListTransactionsRequest,
    responseSerialize: serialize_transaction_ListTransactionsResponse,
    responseDeserialize: deserialize_transaction_ListTransactionsResponse,
  },
  updateTransaction: {
    path: '/transaction.TransactionService/UpdateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_pb.UpdateTransactionRequest,
    responseType: transaction_pb.Transaction,
    requestSerialize: serialize_transaction_UpdateTransactionRequest,
    requestDeserialize: deserialize_transaction_UpdateTransactionRequest,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
  deleteTransaction: {
    path: '/transaction.TransactionService/DeleteTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_pb.DeleteTransactionRequest,
    responseType: transaction_pb.DeleteTransactionResponse,
    requestSerialize: serialize_transaction_DeleteTransactionRequest,
    requestDeserialize: deserialize_transaction_DeleteTransactionRequest,
    responseSerialize: serialize_transaction_DeleteTransactionResponse,
    responseDeserialize: deserialize_transaction_DeleteTransactionResponse,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService, 'TransactionService');
