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
            publishedDate,
            author->,
            "authorImage": author->image.asset->url,
            "image": image.asset->url,
            "alt": image.alt
        }`,
    {},
    { cache: 'no-store' }
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
      "authorImage": author->image.asset->url,
      publishedDate,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      introduction,
      pageBuilder,
    }`,
    { slug },
    { cache: 'no-store' }
  );
}

// Retrieve insights landing content
export async function getInsightsLanding(): Promise<InsightsLanding> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "insightsLanding"][0]{
      _id,
      _createdAt,
      name
    }`,
    {},
    { cache: 'no-store' }
  );
}

// Retrieve ONLY featured insights, used on the homepage
export async function getFeaturedInsights(): Promise<Insight[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "insight" && featured]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            publishedDate,
            featured,
            description,
            "image": image.asset->url,
            "alt": image.alt
        }`,
    {},
    { cache: 'no-store' }
  );
}
