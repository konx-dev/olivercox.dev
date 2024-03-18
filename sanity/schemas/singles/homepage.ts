const homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'insights',
      title: 'Insights',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};

export default homepage;
