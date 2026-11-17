---
nome: vr hub
tipo: sistema de gestão do estúdio
status: em uso
origem: estúdio victor rodrigues · uso interno
linguagens: "JavaScript · HTML · CSS"
ficha:
  - { rotulo: problema, valor: Planilhas soltas e um ERP caro para um estúdio pequeno }
  - { rotulo: dados, valor: JSON versionado em repositório privado no GitHub }
  - { rotulo: acesso, valor: Cloudflare Pages protegido por Cloudflare Access }
  - { rotulo: plataformas, valor: web · Android · Windows }
  - { rotulo: back-end, valor: "API própria em Cloudflare Pages Functions: login por pessoa com PIN (hash PBKDF2), dados filtrados por permissão e regras conferidas no servidor" }
  - { rotulo: testes, valor: "Testes automatizados em Node (cálculos, acessos e fluxos)" }
galeria:
  - { legenda: CRM com lembretes de follow-up e leads vindos do WhatsApp e do Instagram }
  - { legenda: Pedido do cliente e pedido de produção por fornecedor }
codigo:
  arquivo: "functions/api/usuario.js"
  linguagem: js
  nota: "Trecho da API: o PIN nunca é guardado, só o hash PBKDF2 com sal aleatório"
  trecho: |
    const CAMINHO = 'acessos.json'
    const PIN_OK = /^\d{4,8}$/
    const TENTATIVAS = 5, TRAVA = 5 * 60e3
    const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
    async function hashPin(pin, sal) {
      const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveBits'])
      return hex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: new TextEncoder().encode(sal), iterations: 100000 }, k, 256))
    }
    async function novoRegistro(pin) {
      const sal = hex(crypto.getRandomValues(new Uint8Array(16)))
      return { sal, hash: await hashPin(pin, sal), em: new Date().toISOString() }
    }
ordem: 1
---
Sistema de gestão do estúdio, criado no lugar de um ERP pago. Reúne pedidos de venda e de produção por fornecedor, CRM com captura de leads pelo compartilhamento do Android, composição de custo por produto, calendário de entregas e relatórios internos.
