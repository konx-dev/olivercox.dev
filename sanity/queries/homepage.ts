import { Homepage } from '@/types/Homepage';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

// Retrieve insights landing content
export async function getHomepage(): Promise<Homepage> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "homepage"][0]{
      _id,
      _createdAt,
      name,
      heading,
      introduction,
      body,
      insights
    }`,
    {},
    { cache: 'no-store' }
  );
}
