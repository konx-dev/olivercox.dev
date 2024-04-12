import ArrowLink from '@/components/atom/ArrowLink';
import InsightCard from '@/components/organism/cards/InsightCardThin';
import { getInsights, getInsightsLanding } from '@/sanity/queries/insights';
import insightsLanding from '@/sanity/schemas/singles/insights-landing';

// SEO & Metadata
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const insightsLanding = await getInsightsLanding();

  return {
    title: insightsLanding.name
  };
}

export default async function Insights() {
  const insights = await getInsights();

  const insightsLanding = await getInsightsLanding();

  return (
    <section className="my-10 lg:my-20">
      <div className="container max-w-[1000px]">
        <div className="px-4 mb-4 lg:mb-8 flex justify-start">
          <ArrowLink target={'/'} callToAction={'Return Home'} reversed />
        </div>
        <div className="px-4 mb-8 lg:mb-12">
          <h1 className="text-heading-xxl font-medium">{insightsLanding.name}</h1>
        </div>
        <div className="px-4">
          {insights.map((insight, index) => (
            <div key={insight._id}>
              <InsightCard position={index} ctx={insight} />
              {index !== insights.length - 1 && <hr className="border border-black-700" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
