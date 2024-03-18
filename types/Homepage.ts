import { PortableTextBlock } from 'sanity';

export type Homepage = {
  _id: string;
  _createdAt: Date;
  name: string;
  heading: string;
  introduction: PortableTextBlock[];
  body: PortableTextBlock[];
  insights: PortableTextBlock[];
};
