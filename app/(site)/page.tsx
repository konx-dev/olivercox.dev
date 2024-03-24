// Components
import ExperienceWrapper from '@/components/organism/Experience';
import ProjectsWrapper from '@/components/organism/Projects';
import InsightsWrapper from '@/components/organism/Insights';
import RichText from '@/components/atom/RichText';

// Queries
import { getHomepage } from '@/sanity/queries/homepage';
import { getGlobals } from '@/sanity/queries/globals';

// Types

export default async function Home() {
  const page = await getHomepage();

  const globals = await getGlobals();

  return (
    <section>
      {/* Left column */}
      <div>
        <div>-- logo --</div>
        <h1>{page.heading}</h1>
        <RichText ctx={page.introduction} />
        <div>-- socials --</div>
        <div>-- lightswitch --</div>
        <div>
          <RichText ctx={globals.builtWith} />
        </div>
      </div>
      {/* Right column */}
      <div>
        <RichText ctx={page.body} />

        <ExperienceWrapper />
        <ProjectsWrapper />
        <InsightsWrapper insightsBody={page.insights} />
      </div>
    </section>
  );
}
