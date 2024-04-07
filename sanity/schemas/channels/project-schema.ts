const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
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
      name: 'year',
      title: 'Year Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Made at',
      name: 'madeAt',
      type: 'string',
      options: {
        list: [
          { title: 'Freelance', value: 'freelance' },
          { title: 'Personal', value: 'personal' },
          { title: 'Raleigh Bikes', value: 'raleigh' },
          { title: 'Abstrakt', value: 'abstrakt' },
          { title: 'Nzime', value: 'nzime' }
        ]
      }
    },
    {
      title: 'Built with',
      name: 'builtWith',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Vue', value: 'vue' },
          { title: 'React', value: 'react' },
          { title: 'Vanilla JavaScript', value: 'vanilla-javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'Wordpress', value: 'wordpress' },
          { title: 'SCSS', value: 'scss' },
          { title: 'TailwindCSS', value: 'tailwindcss' },
          { title: 'Nuxt', value: 'nuxt' },
          { title: 'CraftCMS', value: 'craftcms' },
          { title: 'Twig', value: 'twig' },
          { title: 'Sanity', value: 'sanity' },
          { title: 'Next', value: 'next' }
        ]
      }
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};

export default project;
