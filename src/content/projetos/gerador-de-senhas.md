---
nome: Gerador de senhas
tipo: programa de terminal
status: exercício
origem: estudo · Go
linguagens: Go
github: https://github.com/rdgvictor/GERADOR_DE_SENHAS
ordem: 101
arvore: 'GERADOR_DE_SENHAS/

  ├─ cmd/

  │  └─ main.go

  ├─ internal/

  │  └─ generator/

  │     └─ password.go

  └─ go.mod'
ficha:
- rotulo: conceitos
  valor: flags de linha de comando, crypto/rand, pacote internal, tratamento de erro
- rotulo: estrutura
  valor: cmd/ para o programa e internal/ para a regra de geração
terminal: '$ go run ./cmd

  Senha gerada: wvgfjR3W

  $ go run ./cmd -length 16

  Senha gerada: WI*dj4@zua&&lxXI

  $ go run ./cmd -length 5

  2026/11/18 06:59:36 a senha deve ter pelo menos 8 caracteres

  exit status 1'
codigo:
  arquivo: internal/generator/password.go
  linguagem: go
  nota: Senha com crypto/rand e validação do tamanho mínimo
  trecho: "package generator\n\nimport (\n\t\"crypto/rand\"\n\t\"fmt\"\n\t\"math/big\"\n)\n\nconst charset = \"abcdefghijklmnopqrstuvwxyz\" +\n\t\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" +\n\t\"0123456789\" +\n\t\"!@#$%&*\"\n\nfunc Generate(length int) (string, error) {\n\tif length < 8 {\n\t\treturn \"\", fmt.Errorf(\"a senha deve ter pelo menos 8 caracteres\")\n\t}\n\n\tpassword := make([]byte, length)\n\n\tfor i := range password {\n\t\tnum, err := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))\n\t\tif err != nil {\n\t\t\treturn \"\", err\n\t\t}\n\t\tpassword[i] = charset[num.Int64()]\n\t}\n\n\treturn string(password), nil\n}\n"
en:
  tipo: command-line program
  origem: study · Go
  texto: Command-line program that generates random passwords with the length chosen by a flag. It uses crypto/rand instead of math/rand, rejects passwords shorter than 8 characters and keeps the program (cmd) apart from the rule (internal).
  ficha:
  - rotulo: concepts
    valor: command-line flags, crypto/rand, internal package, error handling
  - rotulo: structure
    valor: cmd/ for the program and internal/ for the generation rule
  codigoNota: Password with crypto/rand and minimum length check
categoria: exercicio
executar: gerador-de-senhas
icone: chave
---
Programa de terminal que gera senhas aleatórias com o tamanho escolhido por flag. Usa crypto/rand em vez de math/rand, recusa senhas com menos de 8 caracteres e separa o programa (cmd) da regra (internal).
