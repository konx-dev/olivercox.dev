import { PortableText } from '@portabletext/react';

// Queries
import { getHomepage } from '@/sanity/queries/homepage';
import { getFeaturedInsights } from '@/sanity/queries/insights';
import { getFeaturedProjects } from '@/sanity/queries/projects';

export default async function Home() {
  const page = await getHomepage();
  const insights = await getFeaturedInsights();
  const projects = await getFeaturedProjects();

  return (
    <section>
      {/* Left column */}
      <div>
        <div>logo</div>
        <h1>{page.heading}</h1>
        <PortableText value={page.introduction} />
        <div>socials</div>
        <div>lightswitch</div>
        <div>builtWith</div>
      </div>
      {/* Right column */}
      <div>
        <PortableText value={page.body} />
        <div>
          <h3>Experience</h3>
          <div>-- Published/Enabled experience blocks --</div>
          <div>View Full Resume cta</div>
        </div>
        <div>
          <h3>Projects</h3>
          <div>
            {projects.map((project) => (
              <div key={project._id}>{project.name}</div>
            ))}
          </div>
          <div>View Project Archive cta</div>
        </div>
        <div>
          <h3>Insights</h3>
          <PortableText value={page.insights} />
          <div>
            {insights.map((insight) => (
              <div key={insight._id}>{insight.name}</div>
            ))}
          </div>
          <div>View all insights cta</div>
        </div>
      </div>
    </section>
  );
}
