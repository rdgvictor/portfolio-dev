---
nome: vr hub
tipo: sistema de gestão do estúdio
status: em uso
origem: estúdio victor rodrigues · uso interno
linguagens: "JavaScript · HTML · CSS"
ficha:
  - { rotulo: problema, valor: Planilhas soltas e um ERP caro para um estúdio pequeno }
  - { rotulo: módulos, valor: CRM · Pedidos · Financeiro · Arquivo }
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
en:
  tipo: studio management system
  origem: estúdio victor rodrigues · internal use
  texto: Management system for the studio, built instead of paying for an ERP. It brings together sales orders and production orders per supplier, a CRM that captures leads through Android sharing, cost breakdown per product, a delivery calendar and internal reports. It includes Arquivo, a module that organizes Google Drive folders by product code and revision and also opens in its own Windows program.
  ficha:
  - rotulo: problem
    valor: Scattered spreadsheets and an expensive ERP for a small studio
  - rotulo: modules
    valor: CRM · Orders · Finance · Files (Arquivo)
  - rotulo: data
    valor: Versioned JSON in a private GitHub repository
  - rotulo: access
    valor: Cloudflare Pages protected by Cloudflare Access
  - rotulo: platforms
    valor: web · Android · Windows
  - rotulo: back-end
    valor: 'Own API on Cloudflare Pages Functions: per-person login with a PIN (PBKDF2 hash), data filtered by permission and rules checked on the server'
  - rotulo: tests
    valor: Automated tests in Node (calculations, access and flows)
  galeria:
  - CRM with follow-up reminders and leads from WhatsApp and Instagram
  - Customer order and production order per supplier
  codigoNota: 'API excerpt: the PIN is never stored, only its PBKDF2 hash with a random salt'
diagrama:
- titulo: App
  detalhe: web, Android e Windows · equipe do estúdio
  tituloEn: App
  detalheEn: web, Android and Windows · studio team
- titulo: Cloudflare Access
  detalhe: login pelo e-mail da equipe
  tituloEn: Cloudflare Access
  detalheEn: login with the team email
- titulo: API · Pages Functions
  detalhe: PIN por pessoa (PBKDF2), sessão assinada, dados recortados por permissão, regras conferidas no servidor
  tituloEn: API · Pages Functions
  detalheEn: per-person PIN (PBKDF2), signed session, data trimmed by permission, rules checked on the server
- titulo: GitHub · repositório privado
  detalhe: pedidos, equipe e acessos em JSON; cada gravação vira um commit
  tituloEn: GitHub · private repository
  detalheEn: orders, team and access in JSON; every save becomes a commit
- titulo: Rotinas
  detalhe: backup mensal no Google Drive e histórico de atividades pelos commits
  tituloEn: Routines
  detalheEn: monthly backup to Google Drive and activity history from commits
ordem: 1
---
Sistema de gestão do estúdio, criado no lugar de um ERP pago. Reúne pedidos de venda e de produção por fornecedor, CRM com captura de leads pelo compartilhamento do Android, composição de custo por produto, calendário de entregas e relatórios internos. Inclui o Arquivo, módulo que organiza as pastas do Google Drive por código de produto e revisão e também abre num programa próprio para Windows.
