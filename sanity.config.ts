import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'c52tm4o6',
  dataset: 'production',
  title: 'olivercox.dev',
  apiVersion: '2024-02-15',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: { types: schemas }
});

export default config;
