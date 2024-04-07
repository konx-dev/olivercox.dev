import { defineField, defineType } from 'sanity';

export const ImageSingleType = defineType({
  name: 'ImageSingle',
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
