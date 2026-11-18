---
nome: Calculadora de fatoriais
tipo: programa de terminal
status: exercício
origem: estudo · Go
linguagens: Go
github: https://github.com/rdgvictor/CALCULADORA_DE_FATORIAIS
ordem: 104
arvore: 'CALCULADORA_DE_FATORIAIS/

  ├─ 1-calculadoraDeFatoriais.go

  └─ README.md'
ficha:
- rotulo: conceitos
  valor: recursão, funções, entrada do usuário
terminal: '$ go run 1-calculadoraDeFatoriais.go

  Digite o número para o fatorial:

  [[5]]

  O fatorial de 5 é 120'
codigo:
  arquivo: 1-calculadoraDeFatoriais.go
  linguagem: go
  nota: Fatorial por recursão
  trecho: "func factorial(num int) int {\n\tif num == 1 {\n\t\treturn 1\n\t} else {\n\t\treturn num * factorial(num-1)\n\t}\n}\n\nfunc main() {\n\tvar number int\n\tfmt.Println(\"Digite o número para o fatorial:\")\n\tfmt.Scan(&number)\n\tfmt.Printf(\"O fatorial de %d é %d\\n\", number, factorial(number))\n}\n"
en:
  tipo: command-line program
  origem: study · Go
  texto: Command-line program that reads a number and calculates its factorial recursively.
  ficha:
  - rotulo: concepts
    valor: recursion, functions, user input
  codigoNota: Factorial by recursion
categoria: exercicio
executar: calculadora-de-fatoriais
icone: calculadora
---
Programa de terminal que lê um número e calcula o fatorial por recursão.
