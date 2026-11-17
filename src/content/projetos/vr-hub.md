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
ordem: 1
---
Sistema de gestão do estúdio, criado no lugar de um ERP pago. Reúne pedidos de venda e de produção por fornecedor, CRM com captura de leads pelo compartilhamento do Android, composição de custo por produto, calendário de entregas e relatórios internos.
