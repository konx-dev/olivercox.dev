import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  alt: string;
  featured: boolean;
  year: string;
  madeAt: string;
  builtWith: Array<string>;
  url: string;
  content: PortableTextBlock[];
};

export type ProjectsLanding = {
  _id: string;
  _createdAt: Date;
  name: string;
  disclaimer: PortableTextBlock[];
};
