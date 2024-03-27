import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

interface SanityComponents<T> {
  [key: string]: ComponentType<T>;
}

const sanityComponents: SanityComponents<any> = {
  ContentSimple: dynamic(() => import('@/components/pagebuilder/blocks/ContentSimple')),
  ImageSingle: dynamic(() => import('@/components/pagebuilder/blocks/ImageSingle')),
  Code: dynamic(() => import('@/components/pagebuilder/blocks/Code')),
  Divider: dynamic(() => import('@/components/pagebuilder/blocks/Divider'))
};

export default function PageBuilder({ ctx }: { ctx: object[] }) {
  // console.log(ctx);

  return (
    <>
      {ctx.map((block: any, index: number) => {
        console.log('pagebuilder', block);
        const SanityComponent = sanityComponents[block._type];

        return (
          <div key={index}>
            <SanityComponent ctx={block} key={block._id} />
          </div>
        );
      })}
    </>
  );
}
