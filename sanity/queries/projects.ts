import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

// Types
import { Project, ProjectsLanding } from '@/types/Project';

// Retrieve ALL available projects
export async function getProjects(): Promise<Project[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
            "alt": image.alt,
            featured,
            year,
            madeAt,
            builtWith,
            url,
            content
        }`,
    {},
    { cache: 'no-store' }
  );
}

// Retrieve project landing content
export async function getProjectsLanding(): Promise<ProjectsLanding> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "projectsLanding"][0]{
      _id,
      _createdAt,
      name,
      disclaimer
    }`
  );
}

// Retrieve ALL available projects
export async function getFeaturedProjects(): Promise<Project[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "project" && featured]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
            "alt": image.alt,
            featured,
            year,
            madeAt,
            builtWith,
            url,
            content
        }`,
    {},
    { cache: 'no-store' }
  );
}
