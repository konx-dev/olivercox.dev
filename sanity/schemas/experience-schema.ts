const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'startYear',
      title: 'Start Year',
      type: 'date',
      options: {
        dateFormat: 'MMM, YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'endYear',
      title: 'End Year',
      type: 'date',
      options: {
        dateFormat: 'MMM, YYYY',
        calendarTodayLabel: 'Today'
      }
    }
  ]
};

export default experience;
