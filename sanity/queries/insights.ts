import { Insight, InsightsLanding } from '@/types/Insight';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

// Retrieve ALL available insights
export async function getInsights(): Promise<Insight[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "insight"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            featured,
            description,
            "image": image.asset->url,
            "alt": image.alt,
            content
        }`
  );
}

// Retrieve ONE targeted entry against a comparison (slug)
export async function getInsight(slug: string): Promise<Insight> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "insight" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      author->,
      publishedDate,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      introduction,
      content
  }`,
    { slug }
  );
}

// Retrieve insights landing content
export async function getInsightsLanding(): Promise<InsightsLanding> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "insightsLanding"][0]{
      _id,
      _createdAt,
      name
    }`
  );
}
