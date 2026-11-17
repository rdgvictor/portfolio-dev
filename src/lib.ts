// Pequenos auxiliares usados nas páginas
export const statusOk = (s: string) => s === 'em uso' || s === 'no ar';
// **negrito** simples nos textos editados pelo painel
export const negrito = (t: string) =>
  t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string))
   .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
