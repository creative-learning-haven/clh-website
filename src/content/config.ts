import { defineCollection, z } from 'astro:content';

const newsletters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().optional(),
  }),
});

export const collections = {
  newsletters,
};

