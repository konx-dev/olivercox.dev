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
          { title: 'Nuxt', value: 'Nuxt' },
          { title: 'Next', value: 'Next' },
          { title: 'Vue', value: 'Vue' },
          { title: 'React', value: 'React' },
          { title: 'Vanilla JavaScript', value: 'Vanilla-JavaScript' },
          { title: 'TypeScript', value: 'TypeScript' },
          { title: 'Twig', value: 'Twig' },
          { title: 'TailwindCSS', value: 'TailwindCSS' },
          { title: 'SCSS', value: 'SCSS' },
          { title: 'CraftCMS', value: 'Craft-CMS' },
          { title: 'Wordpress', value: 'Wordpress' },
          { title: 'Sanity', value: 'Sanity' },
          { title: 'Magento', value: 'Magento' },
          { title: 'GSAP', value: 'GSAP' }
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
