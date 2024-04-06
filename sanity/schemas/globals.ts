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
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    }
  ]
};

export default globals;
