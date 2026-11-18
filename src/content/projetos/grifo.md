---
nome: Grifo
tipo: app de leitura
status: em desenvolvimento
origem: projeto pessoal
linguagens: "JavaScript · Java (Android)"
ficha:
  - { rotulo: tecnologias, valor: Vite · Capacitor · Electron · pdf.js }
  - { rotulo: build, valor: APK gerado pelo GitHub Actions a cada envio }
  - { rotulo: próximo passo, valor: Backup e sincronização pelo Google Drive }
  - { rotulo: plataformas, valor: Android · Windows · web app }
galeria:
  - { legenda: Grifos coloridos e notas no mesmo arquivo }
  - { legenda: Painel de notas e exportação }
codigo:
  arquivo: "src/anchors.js"
  linguagem: js
  nota: "Âncoras por posição no texto: o mesmo grifo funciona em EPUB, DOCX, Markdown, HTML e TXT"
  trecho: |
    import { colorHex } from './colors.js';
    // Âncoras de texto por deslocamento de caracteres dentro de uma seção.
    // Funcionam igual para EPUB, DOCX, Markdown, HTML e TXT.

    export function textOffset(root, node, offset) {
      const r = document.createRange();
      r.setStart(root, 0);
      r.setEnd(node, offset);
      return r.toString().length;
    }

    function textNodes(root) {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const out = [];
      for (let n = w.nextNode(); n; n = w.nextNode()) out.push(n);
      return out;
    }

    export function rangeFromOffsets(root, start, end) {
      let pos = 0;
      const r = document.createRange();
      let started = false;
      for (const n of textNodes(root)) {
        const len = n.data.length;
        if (!started && start <= pos + len) {
          r.setStart(n, Math.max(0, start - pos));
          started = true;
        }
        if (started && end <= pos + len) {
          r.setEnd(n, Math.max(0, end - pos));
          return r;
        }
        pos += len;
      }
      return started ? r : null;
    }
en:
  tipo: reading app
  origem: personal project
  texto: Reader that opens PDF, EPUB, DOCX, DOC, MOBI, RTF, TXT, Markdown and HTML with the same colored highlights, notes, freehand drawing and a ruler for scanned PDFs. Each person uses it on their own device.
  ficha:
  - rotulo: technologies
    valor: Vite · Capacitor · Electron · pdf.js
  - rotulo: build
    valor: APK built by GitHub Actions on every push
  - rotulo: next step
    valor: Backup and sync through Google Drive
  - rotulo: platforms
    valor: Android · Windows · web app
  galeria:
  - Colored highlights and notes in the same file
  - Notes panel and export
  codigoNota: 'Anchors by text position: the same highlight works in EPUB, DOCX, Markdown, HTML and TXT'
ordem: 4
---
Leitor que abre PDF, EPUB, DOCX, DOC, MOBI, RTF, TXT, Markdown e HTML com os mesmos grifos coloridos, notas, desenho à mão e régua para PDF escaneado. Cada pessoa usa no próprio aparelho.
