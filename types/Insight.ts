import { PortableTextBlock } from 'sanity';

export type Insight = {
  _id: string;
  _createdAt: Date;
  name: string;
  author: Object;
  publishedDate: Date;
  featured: boolean;
  description: string;
  slug: string;
  image: string;
  introduction: PortableTextBlock[];
  content: PortableTextBlock[];
};

export type InsightsLanding = {
  _id: string;
  _createdAt: Date;
  name: string;
};
