import { PortableTextBlock } from 'sanity';

export type Experience = {
  _id: string;
  _createdAt: Date;
  name: string;
  enabled: boolean;
  role: string;
  company: string;
  description: PortableTextBlock[];
  startYear: string;
  endYear: string;
};
