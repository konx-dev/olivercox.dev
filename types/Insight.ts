import { PortableTextBlock } from 'sanity';

export type Insight = {
  _id: string;
  _createdAt: Date;
  name: string;
  author: object;
  publishedDate: Date;
  featured: boolean;
  description: string;
  slug: string;
  image: string;
  introduction: PortableTextBlock[];
  pageBuilder: object[];
};

export type InsightsLanding = {
  _id: string;
  _createdAt: Date;
  name: string;
};
