// Components
import ExperienceWrapper from '@/components/organism/Experience';
import ProjectsWrapper from '@/components/organism/Projects';
import InsightsWrapper from '@/components/organism/Insights';
import AboutWrapper from '@/components/organism/About';
import RichText from '@/components/atom/RichText';

// Queries
import { getHomepage } from '@/sanity/queries/homepage';
import { getGlobals } from '@/sanity/queries/globals';
import ThemeSwitch from '@/components/atom/ThemeSwitch';
import Socials from '@/components/atom/Socials';

export default async function Home() {
  const page = await getHomepage();

  const globals = await getGlobals();

  return (
    <section className="container px-4 pt-12 pb-6 flex flex-col lg:flex-row">
      {/* Left column */}
      <div>
        <div>-- logo (hardcode) --</div>
        <h1 className="text-heading-xl font-bold mb-2">{page.heading}</h1>
        <div className="wysiwyg text-heading-md">
          <RichText ctx={page.introduction} />
        </div>

        <div className="hidden">
          <Socials />
        </div>
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
          <AboutWrapper ctx={page.body} />
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
      <div className="lg:hidden mb-8">
        <Socials />
      </div>
      <div className="lg:hidden text-center font-medium text-xs wysiwyg">
        <RichText ctx={globals.builtWith} />
      </div>
    </section>
  );
}
