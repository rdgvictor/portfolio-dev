package main

import "math/rand"

// A lógica de github.com/rdgvictor/JOGO_DA_ADIVINHACAO, separada do laço com fmt.Scan
// para o navegador poder chamar uma jogada por vez. As mensagens são as mesmas do programa.
var target int

func novoJogo() {
	target = rand.Intn(10) + 1 // 1 a 10
}

// palpite devolve a resposta do jogo e se a partida terminou.
func palpite(guess int) (string, bool) {
	if guess == 0 {
		return "Você desisitiu. O número era: " + itoa(target), true
	}
	if guess > target {
		return "Seu palpite é maior. Tente novamente!", false
	} else if guess < target {
		return "Seu palpite é menor. Tente novamente!", false
	}
	return "Parabéns Você acertou", true
}

func itoa(n int) string {
	if n == 0 {
		return "0"
	}
	s := ""
	for n > 0 {
		s = string(rune('0'+n%10)) + s
		n /= 10
	}
	return s
}
