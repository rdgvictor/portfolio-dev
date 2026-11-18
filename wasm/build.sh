#!/bin/sh
# Compila os exercícios em Go para WebAssembly (um único arquivo) e copia o arquivo de apoio do Go.
# Rode na raiz do projeto: sh wasm/build.sh
set -e
cd wasm/exercicios
GOOS=js GOARCH=wasm go build -ldflags="-s -w" -o ../../public/wasm/exercicios.wasm .
cd ../..
cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" public/wasm/ 2>/dev/null || cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" public/wasm/
echo "ok: public/wasm"
