import { Experience } from '@/types/Experience';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

// Retrieve insights landing content
export async function getExperience(): Promise<Experience[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "experience" && enabled]{
        _id,
        _createdAt,
        name,
        enabled,
        role,
        company,
        description,
        startYear,
        endYear
    }`
  );
}
