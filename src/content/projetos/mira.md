---
nome: Mira
tipo: finanças da casa
status: em uso
origem: projeto pessoal
linguagens: "JavaScript · HTML · CSS"
ficha:
  - { rotulo: problema, valor: Planilha difícil de manter no celular }
  - { rotulo: base, valor: "Mesma arquitetura do vr hub, com login para duas pessoas" }
  - { rotulo: back-end, valor: "API em Cloudflare Pages Functions que lê e grava os dados num repositório privado no GitHub; Worker separado envia o aviso diário de contas" }
  - { rotulo: plataformas, valor: "web · Android (app instalável, funciona offline)" }
galeria:
  - { legenda: Contas do mês e vencimentos }
  - { legenda: Cartões com fechamento e parcelas }
calculadora: true
codigo:
  arquivo: "index.html"
  linguagem: js
  nota: "Regras de fatura e parcelas (formatado para leitura)"
  trecho: |
    function faturaDe(c, data) {
      if (!(c.cartao && +c.fechamento)) return data.slice(0, 7)
      const [y, m, d] = data.split('-').map(Number)
      let f = `${y}-${pad(m)}`
      if (d >= +c.fechamento) f = addMes(f, 1)
      return +c.dia > +c.fechamento ? f : addMes(f, 1)
    }

    function parcelasDe(cp) {
      const n = Math.max(1, +cp.parcelas || 1)
      const p = Math.round(cp.valor / n * 100) / 100
      return Array.from({ length: n }, (_, i) => i < n - 1 ? p : r2(cp.valor - p * (n - 1)))
    }
en:
  tipo: household finances
  origem: personal project
  texto: Household finance app built from the spreadsheet we already used. Bills and due dates, spending by category, goals, bank statement import and credit cards with closing dates and installments calculated month by month.
  ficha:
  - rotulo: problem
    valor: A spreadsheet that was hard to keep up on the phone
  - rotulo: back-end
    valor: API on Cloudflare Pages Functions that reads and writes the data in a private GitHub repository; a separate Worker sends the daily bills reminder
  - rotulo: base
    valor: Same architecture as vr hub, with login for two people
  - rotulo: platforms
    valor: web · Android (installable app, works offline)
  galeria:
  - Monthly bills and due dates
  - Credit cards with closing dates and installments
  codigoNota: Invoice and installment rules (formatted for reading)
diagrama:
- titulo: App
  detalhe: web e Android, instalável e offline
  tituloEn: App
  detalheEn: web and Android, installable and offline
- titulo: Cloudflare Access
  detalhe: login para as duas pessoas da casa
  tituloEn: Cloudflare Access
  detalheEn: login for the two people in the house
- titulo: API · Pages Functions
  detalhe: lê e grava os dados e monta o texto dos avisos
  tituloEn: API · Pages Functions
  detalheEn: reads and writes the data and builds the reminder text
- titulo: GitHub · repositório privado
  detalhe: um arquivo JSON com contas, cartões e metas
  tituloEn: GitHub · private repository
  detalheEn: one JSON file with bills, cards and goals
- titulo: Worker de avisos
  detalhe: notificação diária das contas no celular
  tituloEn: Reminder Worker
  detalheEn: daily bills notification on the phone
ordem: 2
---
App de finanças da casa, feito a partir da planilha que já usávamos. Contas e vencimentos, gastos por categoria, metas, importação de extrato e cartões com fechamento e parcelas calculadas mês a mês.
