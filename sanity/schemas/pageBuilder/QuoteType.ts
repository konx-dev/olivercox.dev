import { defineField, defineType } from 'sanity';

export const QuoteType = defineType({
  name: 'Quote',
  type: 'object',
  title: 'Quote',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    }
  ]
});
