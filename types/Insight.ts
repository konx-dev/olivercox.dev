import { PortableTextBlock } from 'sanity';

export type Insight = {
  _id: string;
  _createdAt: Date;
  name: string;
  author: any;
  authorImage: string;
  publishedDate: string;
  featured: boolean;
  description: string;
  slug: string;
  image: string;
  alt: string;
  introduction: PortableTextBlock[];
  pageBuilder: object[];
};

export type InsightsLanding = {
  _id: string;
  _createdAt: Date;
  name: string;
};
