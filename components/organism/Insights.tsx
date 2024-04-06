import { getFeaturedInsights } from '@/sanity/queries/insights';
import { PortableTextBlock } from 'sanity';

import RichText from '../atom/RichText';
import InsightCard from './cards/InsightCard';
import SectionHeading from '../atom/SectionHeading';
import ArrowLink from '../atom/ArrowLink';

export default async function Experience({ insightsBody }: { insightsBody: PortableTextBlock[] }) {
  const insights = await getFeaturedInsights();

  return (
    <div className="mb-8 lg:mb-10">
      <SectionHeading heading={'Insights'} />
      {insightsBody && (
        <div className="insights-body">
          <RichText ctx={insightsBody} />
        </div>
      )}

      <div className="flex flex-col gap-5 my-6">
        {insights.map((insight) => (
          <InsightCard key={insight._id} ctx={insight} />
        ))}
      </div>
      <div className="mt-6">
        <ArrowLink target={'/insights'} callToAction={'View All Insights'} />
      </div>
    </div>
  );
}
