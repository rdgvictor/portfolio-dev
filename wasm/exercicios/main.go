//go:build js && wasm

// Ponte entre o navegador e os exercícios em Go: cada função fica disponível para o JavaScript da página.
// generator/password.go é uma cópia sem alterações de
// github.com/rdgvictor/GERADOR_DE_SENHAS/internal/generator/password.go
package main

import (
	"fmt"
	"syscall/js"

	"exercicios/generator"
)

func main() {
	js.Global().Set("gerarSenha", js.FuncOf(func(this js.Value, args []js.Value) any {
		senha, err := generator.Generate(args[0].Int())
		if err != nil {
			return map[string]any{"erro": err.Error()}
		}
		return map[string]any{"senha": senha}
	}))
	js.Global().Set("calcularFatorial", js.FuncOf(func(this js.Value, args []js.Value) any {
		n := args[0].Int()
		return fmt.Sprintf("O fatorial de %d é %d", n, factorial(n))
	}))
	js.Global().Set("novoJogo", js.FuncOf(func(this js.Value, args []js.Value) any {
		novoJogo()
		return nil
	}))
	js.Global().Set("palpite", js.FuncOf(func(this js.Value, args []js.Value) any {
		msg, fim := palpite(args[0].Int())
		return map[string]any{"msg": msg, "fim": fim}
	}))
	js.Global().Set("cadastrarFilme", js.FuncOf(func(this js.Value, args []js.Value) any {
		lista := args[3]
		notas := make([]float64, lista.Length())
		for i := range notas {
			notas[i] = lista.Index(i).Float()
		}
		return map[string]any{
			"resumo": resumoFilme(args[0].String(), args[1].Int(), args[2].Float()),
			"media":  fmt.Sprintf("A média das avaliações é: %.2f", calculateAverage(notas)),
		}
	}))
	select {} // mantém o programa vivo para receber chamadas
}
