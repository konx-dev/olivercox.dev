import RichText from '@/components/atom/RichText';
import PageBuilder from '@/components/pagebuilder/Pagebuilder';
import { getInsight } from '@/sanity/queries/insights';
import { notFound } from 'next/navigation';

type Props = {
  params: { insight: string };
};

export default async function Insight({ params }: Props) {
  const slug = params.insight;
  const insight = await getInsight(slug);

  // console.log(insight);

  if (!insight) {
    notFound();
  }

  return (
    <section>
      <h1>{insight.name}</h1>
      <div>{insight.description}</div>
      <div>
        {insight.publishedDate}, by {insight.authorImage}
      </div>
      <div>
        <RichText ctx={insight.introduction} />
      </div>
      <div>
        <PageBuilder ctx={insight.pageBuilder} />
      </div>
    </section>
  );
}
