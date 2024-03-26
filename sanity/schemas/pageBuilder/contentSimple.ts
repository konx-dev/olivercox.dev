import { defineField, defineType } from 'sanity';

export const contentSimpleType = defineType({
  name: 'ContentSimple',
  type: 'object',
  title: 'Content',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
});
