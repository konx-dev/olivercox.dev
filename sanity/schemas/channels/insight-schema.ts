import { defineArrayMember, defineField } from 'sanity';

const insight = {
  name: 'insight',
  title: 'Insights',
  type: 'document',
  groups: [
    {
      name: 'pageBuilder',
      title: 'Page Builder'
    }
  ],
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
      group: 'pageBuilder',
      of: [
        defineArrayMember({
          name: 'ContentSimple',
          type: 'ContentSimple'
        }),
        defineArrayMember({
          name: 'ImageSingle',
          type: 'ImageSingle'
        }),
        defineArrayMember({
          name: 'Divider',
          type: 'Divider'
        }),
        defineArrayMember({
          name: 'Code',
          type: 'CodeSnippet'
        }),
        defineArrayMember({
          name: 'Quote',
          type: 'Quote'
        })
      ]
    })
  ]
};

export default insight;
