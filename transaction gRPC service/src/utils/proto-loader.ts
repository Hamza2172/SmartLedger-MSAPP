/*
protoc ^
  --plugin=protoc-gen-ts_proto="D:/SmartLedger MSAPP/transaction gRPC service/node_modules/.bin/protoc-gen-ts_proto.cmd" ^
  --ts_proto_out=./src/generated ^
  --ts_proto_opt=esModuleInterop=true,forceLong=string,useOptionals=messages ^
  -I ./protos ^
  ./protos/transaction.proto

*/
/*
protoc ^
  --plugin=protoc-gen-ts_proto="D:/SmartLedger MSAPP/transaction gRPC service/node_modules/.bin/protoc-gen-ts_proto.cmd" ^
  --ts_proto_out=./src/generated ^
  --ts_proto_opt=esModuleInterop=true,forceLong=string,useOptionals=all ^
  -I ./protos ^
  ./protos/transaction.proto

*/
