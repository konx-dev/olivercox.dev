import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

interface SanityComponents<T> {
  [key: string]: ComponentType<T>;
}

const sanityComponents: SanityComponents<any> = {
  ContentSimple: dynamic(() => import('@/components/pagebuilder/blocks/ContentSimple')),
  ImageSingle: dynamic(() => import('@/components/pagebuilder/blocks/ImageSingle')),
  Code: dynamic(() => import('@/components/pagebuilder/blocks/Code')),
  Divider: dynamic(() => import('@/components/pagebuilder/blocks/Divider')),
  Quote: dynamic(() => import('@/components/pagebuilder/blocks/Quote'))
};

export default function PageBuilder({ ctx }: { ctx: object[] }) {
  return (
    <>
      {ctx.map((block: any) => {
        const SanityComponent = sanityComponents[block._type];
        return (
          <div key={block._id}>
            <SanityComponent ctx={block} />
          </div>
        );
      })}
    </>
  );
}
