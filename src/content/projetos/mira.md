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
ordem: 3
---
App de finanças da casa, feito a partir da planilha que já usávamos. Contas e vencimentos, gastos por categoria, metas, importação de extrato e cartões com fechamento e parcelas calculadas mês a mês.
