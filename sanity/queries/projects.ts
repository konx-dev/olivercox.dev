import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

// Retrieve ALL available projects
export async function getProjects(): Promise<Project[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
            "alt": image.alt,
            url,
            content
        }`
  );
}
