import { defineConfig } from 'sanity';
import schemas from './sanity/schemas';

// Tools
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['homepage', 'insightsLanding', 'projectsLanding']);

const config = defineConfig({
  projectId: 'c52tm4o6',
  dataset: 'production',
  title: 'olivercox.dev',
  apiVersion: '2024-02-15',
  basePath: '/admin',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singles - Instead of rendering a list of documents, we render a single document, specifying the `documentId` manually
            S.listItem()
              .title('Singles')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Homepage')
                      .id('homepage')
                      .child(S.document().schemaType('homepage').documentId('homepage')),
                    S.listItem()
                      .title('Insights (Landing)')
                      .id('insightsLanding')
                      .child(S.document().schemaType('insightsLanding').documentId('insightsLanding')),
                    S.listItem()
                      .title('Projects (Landing)')
                      .id('projectsLanding')
                      .child(S.document().schemaType('projectsLanding').documentId('projectsLanding'))
                  ])
              ),

            // Regular document types
            S.documentTypeListItem('experience').title('Experience'),
            S.documentTypeListItem('author').title('Authors'),
            S.documentTypeListItem('insight').title('Insights'),
            S.documentTypeListItem('project').title('Projects')
          ])
    }),
    visionTool()
  ],
  schema: {
    types: schemas,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
  }
});

export default config;
