const projectsLanding = {
  name: 'projectsLanding',
  title: 'Projects (landing)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};

export default projectsLanding;
