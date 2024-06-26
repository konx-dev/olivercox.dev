import { PortableTextBlock } from 'sanity';
import RichText from '../atom/RichText';
import SectionHeading from '../atom/SectionHeading';

export default function About({ ctx }: { ctx: PortableTextBlock[] }) {
  return (
    <div className="mb-8 lg:mb-10">
      <SectionHeading heading={'About'} />
      <div className="text-sm lg:text-lg wysiwyg">
        <RichText ctx={ctx} />
      </div>
    </div>
  );
}
