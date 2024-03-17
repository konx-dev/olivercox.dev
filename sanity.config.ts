import { defineConfig } from 'sanity';
import schemas from './sanity/schemas';

// Tools
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  projectId: 'c52tm4o6',
  dataset: 'production',
  title: 'olivercox.dev',
  apiVersion: '2024-02-15',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas }
});

export default config;
