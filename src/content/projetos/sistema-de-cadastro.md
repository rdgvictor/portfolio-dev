---
nome: Sistema de cadastro
tipo: programa de terminal
status: exercício
origem: estudo · Go
linguagens: Go
github: https://github.com/rdgvictor/SISTEMA_DE_CADASTRO
ordem: 102
arvore: 'SISTEMA_DE_CADASTRO/

  ├─ sistemaDeCadastro.go

  └─ README.md'
ficha:
- rotulo: conceitos
  valor: leitura com bufio, conversão de tipos com strconv, funções auxiliares, laço para média
terminal: '$ go run sistemaDeCadastro.go

  Bem-vindo ao sistema de filmes!

  Agora iremos cadastrar um filme no sistema.

  Digite o nome do filme:

  [[Cidade de Deus]]

  Digite o ano de lançamento do filme:

  [[2002]]

  Digite o preço do filme:

  [[29.90]]

  O filme cadastrado é Cidade de Deus lançado em 2002, ele custa - R$ 29.90

  Agora atribua as notas para cálculo da média de avaliações:

  Digite quantas avaliações deseja fazer para o filme:

  [[3]]

  Digite a nota 1: [[9.5]]

  Digite a nota 2: [[8]]

  Digite a nota 3: [[9]]

  A média das avaliações é: 8.83'
codigo:
  arquivo: sistemaDeCadastro.go
  linguagem: go
  nota: Média das avaliações, com proteção contra divisão por zero
  trecho: "func calculateAverage() float64 {\n\tfmt.Println(\"Digite quantas avaliações deseja fazer para o filme:\")\n\tnumRatings := readInt()\n\n\tvar total float64\n\n\tfor i := 0; i < numRatings; i++ {\n\t\tfmt.Printf(\"Digite a nota %d: \", i+1)\n\t\tnote := readFloat()\n\t\ttotal += note\n\t}\n\n\tif numRatings == 0 {\n\t\treturn 0\n\t}\n\n\treturn total / float64(numRatings)\n}\n"
en:
  tipo: command-line program
  origem: study · Go
  texto: 'Movie registration in the terminal: it reads name, year and price, prints a summary and averages the ratings typed in. Helper functions handle reading and converting each data type.'
  ficha:
  - rotulo: concepts
    valor: reading with bufio, type conversion with strconv, helper functions, loop for the average
  codigoNota: Ratings average, guarded against division by zero
categoria: exercicio
executar: sistema-de-cadastro
icone: filme
---
Cadastro de filmes no terminal: lê nome, ano e preço, mostra o resumo e calcula a média das notas digitadas. Funções auxiliares fazem a leitura e a conversão de cada tipo de dado.
