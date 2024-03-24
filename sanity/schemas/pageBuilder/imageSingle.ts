import { defineField, defineType } from 'sanity';

export const imageSingleType = defineType({
  name: 'imageSingle',
  type: 'object',
  title: 'Image',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    })
  ]
});
