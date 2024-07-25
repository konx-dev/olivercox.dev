import { PortableTextBlock } from 'sanity';
import RichText from '../atom/RichText';
import SectionHeading from '../atom/SectionHeading';

export default function About({ ctx }: { ctx: PortableTextBlock[] }) {
  return (
    <div className="">
      <SectionHeading heading={'About'} />
      <div className="text-sm lg:text-lg wysiwyg flex flex-col gap-4">
        <RichText ctx={ctx} />
      </div>
    </div>
  );
}
