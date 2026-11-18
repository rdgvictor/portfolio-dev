---
nome: site do estúdio
tipo: Astro · Decap CMS · Netlify
status: no ar
origem: estúdio victor rodrigues
linguagens: "TypeScript · HTML · CSS"
ficha:
  - { rotulo: endereço, valor: estudiovictorrodrigues.com.br }
  - { rotulo: tecnologias, valor: Astro · Decap CMS }
  - { rotulo: publicação, valor: Netlify com DNS próprio }
galeria:
  - { legenda: Página de produto com download 3D }
  - { legenda: Versão mobile }
link: https://estudiovictorrodrigues.com.br
textoLink: Visitar o site
codigo:
  arquivo: "src/layouts/Base.astro"
  linguagem: js
  nota: "Transição entre páginas: intercepta só links internos"
  trecho: |
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      var u = new URL(a.href, location.href);
      if (u.origin !== location.origin) return;
      if (u.pathname === location.pathname && u.search === location.search) return;
      e.preventDefault();
      t.className = 'transicao fechando';
      setTimeout(function () { location.href = a.href; }, reduz ? 150 : 1500);
    });
en:
  tipo: Astro · Decap CMS · Netlify
  origem: estúdio victor rodrigues
  texto: Showcase for the studio products, instead of paying for a website builder. Static site with a content panel, animated page transitions, 3D block downloads for each product and its own mobile version.
  ficha:
  - rotulo: address
    valor: estudiovictorrodrigues.com.br
  - rotulo: technologies
    valor: Astro · Decap CMS
  - rotulo: hosting
    valor: Netlify with its own domain
  galeria:
  - Product page with 3D download
  - Mobile version
  codigoNota: 'Page transition: intercepts internal links only'
  textoLink: Visit the site
ordem: 5
---
Vitrine dos produtos do estúdio, no lugar de uma assinatura de construtor de sites. Site estático com painel de conteúdo, transição animada entre páginas, download dos blocos 3D de cada produto e versão mobile própria.
