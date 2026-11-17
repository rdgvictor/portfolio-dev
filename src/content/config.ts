import { defineCollection, z } from 'astro:content';

const projetos = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    tipo: z.string(),
    status: z.enum(['em uso', 'no ar', 'uso interno', 'em desenvolvimento', 'em estudo']),
    origem: z.string(),
    imagemLista: z.string().optional(),
    imagem: z.string().optional(),
    ficha: z.array(z.object({ rotulo: z.string(), valor: z.string() })).default([]),
    galeria: z.array(z.object({ imagem: z.string().optional(), legenda: z.string().optional() })).default([]),
    link: z.string().optional(),
    textoLink: z.string().optional(),
    calculadora: z.boolean().default(false),
    ordem: z.number().default(99),
  }),
});

export const collections = { projetos };
