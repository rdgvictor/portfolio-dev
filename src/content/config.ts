import { defineCollection, z } from 'astro:content';
import { NOMES_ICONES } from '../icones';

const projetos = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    tipo: z.string(),
    status: z.enum(['em uso', 'no ar', 'uso interno', 'em desenvolvimento', 'em estudo', 'exercício']),
    categoria: z.enum(['projeto', 'exercicio']).default('projeto'),
    arvore: z.string().optional(),
    icone: z.enum(NOMES_ICONES).optional(),
    terminal: z.string().optional(),
    executar: z.enum(['gerador-de-senhas', 'calculadora-de-fatoriais', 'jogo-da-adivinhacao', 'sistema-de-cadastro']).optional(),
    origem: z.string(),
    linguagens: z.string().optional(),
    imagemLista: z.string().optional(),
    imagem: z.string().optional(),
    ficha: z.array(z.object({ rotulo: z.string(), valor: z.string() })).default([]),
    galeria: z.array(z.object({ imagem: z.string().optional(), legenda: z.string().optional() })).default([]),
    link: z.string().optional(),
    textoLink: z.string().optional(),
    codigo: z.object({
      arquivo: z.string(),
      linguagem: z.string().default('js'),
      nota: z.string().optional(),
      trecho: z.string(),
    }).optional(),
    github: z.string().optional(),
    numeros: z.array(z.object({ valor: z.string(), rotulo: z.string(), rotuloEn: z.string().optional() })).default([]),
    diagrama: z.array(z.object({ titulo: z.string(), detalhe: z.string().optional(), tituloEn: z.string().optional(), detalheEn: z.string().optional() })).default([]),
    en: z.object({
      tipo: z.string().optional(),
      origem: z.string().optional(),
      texto: z.string().optional(),
      ficha: z.array(z.object({ rotulo: z.string(), valor: z.string() })).optional(),
      galeria: z.array(z.string()).optional(),
      codigoNota: z.string().optional(),
      textoLink: z.string().optional(),
    }).optional(),
    calculadora: z.boolean().default(false),
    ordem: z.number().default(99),
  }),
});

export const collections = { projetos };
