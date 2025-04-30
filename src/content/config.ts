import { z, defineCollection } from 'astro:content';

const copywritingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    page: z.string(),
    text: z.string(),
    index: z.number(),
    type: z.string(),
  }),
});

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        body: z.string(),
        date: z.date(),
        published: z.boolean()
    })
})

export const collections = {
  copywriting: copywritingCollection,
  post: postCollection
};

