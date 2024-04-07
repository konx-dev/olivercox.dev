import { defineField, defineType } from 'sanity';

export const DividerType = defineType({
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
