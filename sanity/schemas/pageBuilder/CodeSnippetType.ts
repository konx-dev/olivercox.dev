import { defineField, defineType } from 'sanity';

export const CodeSnippetType = defineType({
  name: 'CodeSnippet',
  type: 'object',
  title: 'Code',
  fields: [
    defineField({
      type: 'code',
      name: 'CodeSnippet',
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
