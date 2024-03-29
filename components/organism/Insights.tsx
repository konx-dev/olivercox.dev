import { getFeaturedInsights } from '@/sanity/queries/insights';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';
import Image from 'next/image';

import RichText from '../atom/RichText';

export default async function Experience({ insightsBody }: { insightsBody: PortableTextBlock[] }) {
  const insights = await getFeaturedInsights();

  console.log(insights);

  return (
    <div>
      <h3>Insights</h3>
      {insightsBody && <RichText ctx={insightsBody} />}
      <div>
        {insights.map((insight) => (
          <div key={insight._id}>
            <div>
              <Image src={insight.image} alt={insight.alt} width={200} height={200} />
            </div>
            <div>{insight.name}</div>
            <div>{insight.slug}</div>
            <div>{insight.publishedDate}</div>
          </div>
        ))}
      </div>
      <div>
        <Link href="/insights">View all insights</Link>
      </div>
    </div>
  );
}
