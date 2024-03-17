// Channels
import project from './channels/project-schema';
import insight from './channels/insight-schema';
import author from './channels/author-schema';
import experience from './channels/experience-schema';

// Singles & Pages
import projectsLanding from './singles/projects-landing';
import insightsLanding from './singles/insights-landing';

const schemas = [project, insight, author, experience, projectsLanding, insightsLanding];

export default schemas;
