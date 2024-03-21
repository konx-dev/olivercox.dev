const globals = {
  name: 'globals',
  title: 'Globals',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'builtWith',
      title: 'Built with',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};

export default globals;
