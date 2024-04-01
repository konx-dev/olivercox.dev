import { getFeaturedInsights } from '@/sanity/queries/insights';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';

import RichText from '../atom/RichText';
import InsightCard from './cards/InsightCard';

export default async function Experience({ insightsBody }: { insightsBody: PortableTextBlock[] }) {
  const insights = await getFeaturedInsights();

  return (
    <div className="my-8 lg:my-16">
      <h3 className="mb-4 text-heading-lg font-bold">Insights</h3>
      {insightsBody && <RichText ctx={insightsBody} />}

      <div className="flex flex-col gap-5">
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
