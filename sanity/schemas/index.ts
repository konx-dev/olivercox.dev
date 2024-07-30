// Channels
import project from './channels/project-schema';
import insight from './channels/insight-schema';
import author from './channels/author-schema';
import experience from './channels/experience-schema';

// Singles & Pages
import projectsLanding from './singles/projects-landing';
import insightsLanding from './singles/insights-landing';
import homepage from './singles/homepage';

// Misc
import globals from './globals';

// Page Builder
import { ContentSimpleType } from '@/sanity/schemas/pageBuilder/ContentSimpleType';
import { ImageSingleType } from '@/sanity/schemas/pageBuilder/ImageSingleType';
import { DividerType } from '@/sanity/schemas/pageBuilder/DividerType';
import { CodeSnippetType } from '@/sanity/schemas/pageBuilder/CodeSnippetType';
import { QuoteType } from '@/sanity/schemas/pageBuilder/QuoteType';

const schemas = [
  project,
  insight,
  author,
  experience,
  projectsLanding,
  insightsLanding,
  homepage,
  globals,
  ContentSimpleType,
  ImageSingleType,
  DividerType,
  CodeSnippetType,
  QuoteType
];

export default schemas;
