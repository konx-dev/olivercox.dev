import { PortableTextBlock } from 'sanity';

export type Globals = {
  _id: string;
  _createdAt: Date;
  name: string;
  builtWith: PortableTextBlock[];
};
