import { defineArrayMember, defineField } from 'sanity';

const insight = {
  name: 'insight',
  title: 'Insights',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM, YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
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
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'block' }]
    },
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contentSimple',
          type: 'contentSimple'
        }),
        defineArrayMember({
          name: 'imageSingle',
          type: 'imageSingle'
        }),
        defineArrayMember({
          name: 'divider',
          type: 'divider'
        }),
        defineArrayMember({
          name: 'code',
          type: 'codeSnippet'
        })
      ]
    })
  ]
};

export default insight;
