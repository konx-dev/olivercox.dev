import { getInsights, getInsightsLanding } from '@/sanity/queries/insights';

export default async function Insights() {
  const insights = await getInsights();

  const insightsLanding = await getInsightsLanding();

  console.log(insightsLanding);

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
