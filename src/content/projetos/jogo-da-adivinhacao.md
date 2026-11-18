---
nome: Jogo da adivinhação
tipo: jogo de terminal
status: exercício
origem: estudo · Go
linguagens: Go
github: https://github.com/rdgvictor/JOGO_DA_ADIVINHACAO
ordem: 103
arvore: 'JOGO_DA_ADIVINHACAO/

  ├─ jogoDaAdivinhacao.go

  └─ README.md'
ficha:
- rotulo: conceitos
  valor: laço for, condicionais, número aleatório com math/rand, entrada do usuário
terminal: '$ go run jogoDaAdivinhacao.go

  Jogo da Adivinhação

  Tente advinhar o número entre 1 e 10

  Digite seu palpite (ou 0 para sair):[[5]]

  Seu palpite é menor. Tente novamente!

  Digite seu palpite (ou 0 para sair):[[8]]

  Parabéns Você acertou'
codigo:
  arquivo: jogoDaAdivinhacao.go
  linguagem: go
  nota: Laço do jogo com dicas de maior e menor
  trecho: "func main() {\n\n\ttarget := rand.Intn(10) + 1 // 1 a 10\n\n\tfmt.Println(\"Jogo da Adivinhação\")\n\tfmt.Println(\"Tente advinhar o número entre 1 e 10\")\n\n\tvar guess int\n\n\tfor {\n\t\tfmt.Print(\"Digite seu palpite (ou 0 para sair):\")\n\t\tfmt.Scan(&guess)\n\n\t\tif guess == 0 {\n\t\t\tfmt.Println(\"Você desisitiu. O número era: \", target)\n\t\t\tbreak\n\t\t}\n\n\t\tif guess > target {\n\t\t\tfmt.Println(\"Seu palpite é maior. Tente novamente!\")\n\t\t} else if guess < target {\n\t\t\tfmt.Println(\"Seu palpite é menor. Tente novamente!\")\n\t\t} else {\n\t\t\tfmt.Println(\"Parabéns Você acertou\")\n\t\t\tbreak\n\t\t}\n\t}\n}\n"
en:
  tipo: terminal game
  origem: study · Go
  texto: Terminal game where the program picks a number from 1 to 10 and gives higher or lower hints until you guess it or give up with 0.
  ficha:
  - rotulo: concepts
    valor: for loop, conditionals, random number with math/rand, user input
  codigoNota: Game loop with higher and lower hints
categoria: exercicio
executar: jogo-da-adivinhacao
icone: dado
---
Jogo de terminal em que o programa sorteia um número de 1 a 10 e dá dicas de maior ou menor até você acertar ou desistir com 0.
