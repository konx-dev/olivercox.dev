import ArrowLink from '@/components/atom/ArrowLink';
import InsightCard from '@/components/organism/cards/InsightCardThin';
import { getInsights, getInsightsLanding } from '@/sanity/queries/insights';

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
            <>
              <InsightCard key={insight._id} position={index} ctx={insight} />
              {index !== insights.length - 1 && <hr key={insight._id} className="border border-black-700" />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
