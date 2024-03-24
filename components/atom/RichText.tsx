import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

export default async function TextWrapper({ ctx }: { ctx: PortableTextBlock[] }) {
  return <>{ctx && <PortableText value={ctx} />}</>;
}
