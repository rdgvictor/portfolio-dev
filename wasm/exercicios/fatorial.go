package main

// Cópia sem alterações de github.com/rdgvictor/CALCULADORA_DE_FATORIAIS (1-calculadoraDeFatoriais.go).
func factorial(num int) int {
	if num == 1 {
		return 1
	} else {
		return num * factorial(num-1)
	}
}
