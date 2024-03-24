import { defineField, defineType } from 'sanity';

export const codeSnippetType = defineType({
  name: 'codeSnippet',
  type: 'object',
  title: 'Code',
  fields: [
    defineField({
      type: 'code',
      name: 'codeSnippet',
      title: 'Code',
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'Javascript', value: 'javascript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' }
        ]
      }
    })
  ]
});
