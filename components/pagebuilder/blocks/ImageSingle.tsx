import { refConvert } from '@/helpers';
import Image from 'next/image';

export default function ImageSingle({ ctx }: { ctx: any }) {
  return <Image src={refConvert(ctx.image)} alt={ctx.image.alt} width={200} height={200} />;
}
