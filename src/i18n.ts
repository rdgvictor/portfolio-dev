// Textos da interface em português e inglês. O conteúdo (projetos, sobre etc.) fica nos arquivos de dados.
export type Lang = 'pt' | 'en';

const T = {
  pt: {
    projetos: 'Projetos', sobre: 'Sobre', contato: 'Contato', verTodos: 'ver todos',
    listaSub: (n: number) => `${n} projetos · problemas reais do estúdio e de casa`,
    infoAdicionais: 'Informações adicionais', comoFunciona: 'Como funciona por dentro', exercicios: 'Exercícios e estudos', exerciciosSub: 'programas curtos para praticar a linguagem', execucao: 'Execução', execucaoNota: 'saída real do programa', previaCodigo: 'Prévia do código', verGithub: 'Ver no GitHub',
    linguagens: 'linguagens', status: 'status', stack: 'Stack', trajetoria: 'Trajetória', estudando: 'Estudando agora',
    curriculo: 'Baixar currículo (PDF)', codigoSite: 'Código deste site no GitHub',
    email: 'e-mail', copiar: 'copiar', copiado: 'copiado', abrir: 'abrir', menu: 'Abrir menu', inicio: 'início',
    destaque: 'Abrir o projeto em destaque', navProjetos: 'Navegar entre projetos', paginas: 'Páginas',
    outroIdioma: 'English', outroIdiomaRotulo: 'Read in English',
    img: { lista: 'imagem', principal: 'captura de tela principal', tela: 'captura de tela', retrato: 'retrato', hero: 'captura de tela grande · projeto em destaque' },
  },
  en: {
    projetos: 'Projects', sobre: 'About', contato: 'Contact', verTodos: 'see all',
    listaSub: (n: number) => `${n} projects · real problems from the studio and at home`,
    infoAdicionais: 'More information', comoFunciona: 'How it works inside', exercicios: 'Exercises and studies', exerciciosSub: 'short programs to practice the language', execucao: 'Run', execucaoNota: 'real program output', previaCodigo: 'Code preview', verGithub: 'View on GitHub',
    linguagens: 'languages', status: 'status', stack: 'Stack', trajetoria: 'Experience', estudando: 'Studying now',
    curriculo: 'Download résumé (PDF)', codigoSite: 'Source code of this site on GitHub',
    email: 'email', copiar: 'copy', copiado: 'copied', abrir: 'open', menu: 'Open menu', inicio: 'home',
    destaque: 'Open the featured project', navProjetos: 'Browse projects', paginas: 'Pages',
    outroIdioma: 'Português', outroIdiomaRotulo: 'Ler em português',
    img: { lista: 'image', principal: 'main screenshot', tela: 'screenshot', retrato: 'portrait', hero: 'large screenshot · featured project' },
  },
};
export const t = (lang: Lang) => T[lang];

const STATUS_EN: Record<string, string> = {
  'em uso': 'in use', 'no ar': 'live', 'uso interno': 'internal use', 'em desenvolvimento': 'in development', 'em estudo': 'research', 'exercício': 'exercise',
};
export const status = (s: string, lang: Lang) => (lang === 'en' ? STATUS_EN[s] || s : s);
export const linguagens = (s: string, lang: Lang) =>
  lang === 'en' ? s.replace('programação visual', 'visual programming').replace(/ e /g, ' and ') : s;

// caminho da página no idioma pedido: '/projetos/' <-> '/en/projetos/'
export const rota = (p: string, lang: Lang) => (lang === 'en' ? '/en' + (p === '/' ? '/' : p) : p);
export const outraRota = (pathname: string) =>
  pathname.startsWith('/en/') || pathname === '/en' ? pathname.replace(/^\/en/, '') || '/' : '/en' + pathname;
