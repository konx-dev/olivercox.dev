// Components
import ExperienceWrapper from '@/components/organism/Experience';
import ProjectsWrapper from '@/components/organism/Projects';
import InsightsWrapper from '@/components/organism/Insights';
import AboutWrapper from '@/components/organism/About';
import RichText from '@/components/atom/RichText';
import Image from 'next/image';

// Queries
import { getHomepage } from '@/sanity/queries/homepage';
import { getGlobals } from '@/sanity/queries/globals';
import Socials from '@/components/atom/Socials';
import { refConvert } from '@/helpers';

export default async function Home() {
  const page = await getHomepage();

  const globals = await getGlobals();

  return (
    <section className="container px-4 pt-12 pb-6 flex flex-col lg:flex-row lg:justify-between">
      {/* Left column */}
      <div className="lg:max-w-[440px] lg:sticky lg:top-[50px] lg:h-min">
        <div className="flex justify-center sm:justify-start">
          <div className="rounded-full overflow-hidden">
            <Image
              src={refConvert(globals.profilePicture)}
              alt={globals.alt}
              width={180}
              height={180}
              sizes="(max-width: 768px) 50vw"
            />
          </div>
        </div>

        <h1 className="text-heading-xl font-bold mt-6 mb-2">{page.heading}</h1>

        <div className="wysiwyg text-heading-md">
          <RichText ctx={page.introduction} />
        </div>

        <p className="text-sm font-primary text-red-500 dark:text-blue-500 mt-5">
          JavaScript (Vue/React) | TailwindCSS | CraftCMS & Sanity.io
        </p>

        <div className="hidden lg:flex my-10">
          <Socials />
        </div>
        <div className="hidden text-xs lg:block">
          <RichText ctx={globals.builtWith} />
        </div>
      </div>
      {/* Right column */}
      <div className="flex flex-col lg:max-w-[550px]">
        <div className="order-3 lg:order-1">
          <AboutWrapper ctx={page.body} />
        </div>
        <div className="order-2">
          <ExperienceWrapper />
        </div>
        <div className="order-1 lg:order-3">
          <ProjectsWrapper />
        </div>
        <div className="order-4">
          <InsightsWrapper insightsBody={page.insights} />
        </div>
      </div>
      <div className="lg:hidden mb-8">
        <Socials />
      </div>
      <div className="lg:hidden mx-auto max-w-[400px] text-center font-medium text-xs wysiwyg">
        <RichText ctx={globals.builtWith} />
      </div>
    </section>
  );
}
