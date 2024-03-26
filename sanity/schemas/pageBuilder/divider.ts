import { defineField, defineType } from 'sanity';

export const dividerType = defineType({
  name: 'Divider',
  type: 'object',
  title: 'Divider',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean'
    })
  ]
});
