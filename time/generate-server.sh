grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./dist/gen \
--grpc_out=grpc_js:./dist/gen \
--plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=service=grpc-node,mode=grpc-js:./src/gen \
-I ./proto time-protocol.proto