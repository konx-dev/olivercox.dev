import { refConvert } from '@/helpers';
import Image from 'next/image';

type ImageBlock = {
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
    };
  };
};

export default function ImageSingle({ ctx }: { ctx: ImageBlock }) {
  return (
    <div className="my-5 lg:my-10 rounded-lg overflow-hidden">
      <Image
        src={refConvert(ctx.image.asset._ref)}
        alt={ctx.image.alt}
        width={800}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
      />
    </div>
  );
}
