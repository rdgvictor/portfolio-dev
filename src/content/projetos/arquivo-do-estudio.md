---
nome: Arquivo do Estúdio
tipo: módulo do vr hub · Windows
status: uso interno
origem: estúdio victor rodrigues · uso interno
linguagens: "JavaScript · HTML · CSS"
ficha:
  - { rotulo: problema, valor: Arquivos de projeto sem padrão de nome nem de pasta }
  - { rotulo: integração, valor: Google Drive para computador }
  - { rotulo: plataformas, valor: web · Windows }
galeria:
  - { legenda: Estrutura padrão por produto }
  - { legenda: Nome gerado por código e revisão }
codigo:
  arquivo: "arquivo/arquivo.js"
  linguagem: js
  nota: "Nome do arquivo por código, medida, etapa e próxima revisão livre"
  trecho: |
    function prefixo() { const p = curProd(); return `${p.codigo} - ${nomeLivre(p)}${$('#nMed').value ? ' ' + $('#nMed').value : ''} - ${$('#nTipo').value} - R` }
    function proxRev() {
      if (!curProd()) return 0
      const pre = prefixo(); const pasta = pastaRel(curProd(), $('#nTipo').value, $('#nExt').value, $('#nMed').value)
      const usadas = FILES().filter((f) => f[0] === pasta && f[1].startsWith(pre)).map((f) => parseInt(f[1].slice(pre.length))).filter((n) => !isNaN(n))
      return usadas.length ? Math.max(...usadas) + 1 : 0
ordem: 6
---
Módulo do vr hub que também abre num programa próprio para Windows. Cria a estrutura padrão de pastas no Google Drive, nomeia arquivos por código de produto e revisão (P0001 · Executivo · R0) e controla documentos com vencimento.
