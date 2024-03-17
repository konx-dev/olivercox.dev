import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  featured: boolean;
  year: Date;
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
