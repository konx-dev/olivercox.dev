import { getFeaturedInsights } from '@/sanity/queries/insights';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';

import RichText from '../atom/RichText';

export default async function Experience({ insightsBody }: { insightsBody: PortableTextBlock[] }) {
  const insights = await getFeaturedInsights();

  return (
    <div>
      <h3>Insights</h3>
      {insightsBody && <RichText ctx={insightsBody} />}
      <div>
        {insights.map((insight) => (
          <div key={insight._id}>{insight.name}</div>
        ))}
      </div>
      <div>
        <Link href="/insights">View all insights</Link>
      </div>
    </div>
  );
}
