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
import { contentSimpleType } from './pageBuilder/contentSimple';
import { imageSingleType } from './pageBuilder/imageSingle';
import { dividerType } from './pageBuilder/divider';

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
  dividerType
];

export default schemas;
