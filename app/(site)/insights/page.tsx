import { getInsights } from '@/sanity/queries/insights';

export default async function Insights() {
  const insights = await getInsights();

  return (
    <section>
      <h1>Insights</h1>
      <div>
        {insights.map((insight) => (
          <div key={insight._id}>{insight.name}</div>
        ))}
      </div>
    </section>
  );
}
