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
import { contentSimpleType } from './pageBuilder/ContentSimple';
import { imageSingleType } from './pageBuilder/ImageSingle';
import { dividerType } from './pageBuilder/Divider';
import { codeSnippetType } from './pageBuilder/CodeSnippet';

const schemas = [
  project,
  insight,
  author,
  experience,
  projectsLanding,
  insightsLanding,
  homepage,
  globals,
  contentSimpleType,
  imageSingleType,
  dividerType,
  codeSnippetType
];

export default schemas;
