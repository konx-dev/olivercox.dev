import { getFeaturedInsights } from '@/sanity/queries/insights';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';

import RichText from '../atom/RichText';
import InsightCard from './cards/InsightCard';
import SectionHeading from '../atom/SectionHeading';

export default async function Experience({ insightsBody }: { insightsBody: PortableTextBlock[] }) {
  const insights = await getFeaturedInsights();

  return (
    <div className="mb-8 lg:mb-16">
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
      <div className="text-body font-medium mt-6">
        <Link href="/insights">View all insights</Link>
      </div>
    </div>
  );
}
