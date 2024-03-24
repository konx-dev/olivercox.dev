import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

export default function TextWrapper({ ctx }: { ctx: PortableTextBlock[] }) {
  return <PortableText value={ctx} />;
}
