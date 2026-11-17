# portfolio-dev

Portfólio de desenvolvimento de Victor Rodrigues. Site estático em Astro, publicado no Netlify, com painel Decap CMS em `/admin`.

## Rodar no computador

```bash
npm install
npm run dev
```

## Onde mudar cada coisa

- Projetos: `src/content/projetos/*.md` (ou pelo painel, em Projetos)
- Tema azul ou branco, contatos e rodapé: `src/data/site.json` (painel: Configurações do site)
- Início, etiqueta vertical: `src/data/home.json`
- Sobre e Contato: `src/data/sobre.json` e `src/data/contato.json`
- Visual: `src/styles/global.css` (as cores ficam no início do arquivo)
