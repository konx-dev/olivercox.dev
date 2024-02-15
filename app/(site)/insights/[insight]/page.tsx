import { getInsight } from '@/sanity/queries/insights';
import { notFound } from 'next/navigation';

type Props = {
  params: { insight: string };
};

export default async function Insight({ params }: Props) {
  const slug = params.insight;
  const insight = await getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <section>
      <h1>{insight.name}</h1>
    </section>
  );
}
