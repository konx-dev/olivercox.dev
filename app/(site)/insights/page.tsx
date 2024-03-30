import { getInsights, getInsightsLanding } from '@/sanity/queries/insights';

export default async function Insights() {
  const insights = await getInsights();

  const insightsLanding = await getInsightsLanding();

  return (
    <section>
      <h1>{insightsLanding.name}</h1>
      <div>
        {insights.map((insight) => (
          <div key={insight._id}>
            <div>{insight.name}</div>
            <div>{insight.publishedDate}</div>
            <div>{insight.slug}</div>
            <div>{insight.description}</div>
            <div>{insight.author.name}</div>
            <div>{insight.author.image.alt}</div>
            <div>{insight.authorImage}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
