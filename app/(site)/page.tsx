// Components
import ExperienceWrapper from '@/components/organism/Experience';
import ProjectsWrapper from '@/components/organism/Projects';
import InsightsWrapper from '@/components/organism/Insights';
import RichText from '@/components/atom/RichText';

// Queries
import { getHomepage } from '@/sanity/queries/homepage';
import { getGlobals } from '@/sanity/queries/globals';
import ThemeSwitch from '@/components/atom/ThemeSwitch';

export default async function Home() {
  const page = await getHomepage();

  const globals = await getGlobals();

  return (
    <section className="container px-4 flex flex-col lg:flex-row">
      {/* Left column */}
      <div>
        <div>-- logo (hardcode) --</div>
        <h1 className="text-heading-xl font-bold mb-2">{page.heading}</h1>
        <div className="wysiwyg text-heading-md">
          <RichText ctx={page.introduction} />
        </div>

        <div className="hidden">-- socials (hardcode) --</div>
        <div className="">
          <ThemeSwitch />
        </div>
        <div className="hidden">
          <RichText ctx={globals.builtWith} />
        </div>
      </div>
      {/* Right column */}
      <div className="flex flex-col">
        <div className="order-3">
          <RichText ctx={page.body} />
        </div>
        <div className="order-2">
          <ExperienceWrapper />
        </div>
        <div className="order-1">
          <ProjectsWrapper />
        </div>
        <div className="order-4">
          <InsightsWrapper insightsBody={page.insights} />
        </div>
      </div>
    </section>
  );
}
