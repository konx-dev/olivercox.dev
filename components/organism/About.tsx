import { PortableTextBlock } from 'sanity';
import RichText from '../atom/RichText';
import SectionHeading from '../atom/SectionHeading';

export default async function About({ ctx }: { ctx: PortableTextBlock[] }) {
  return (
    <div className="mb-8 lg:mb-16">
      <SectionHeading heading={'About'} />
      <div className="text-sm lg:text-lg wysiwyg">
        <RichText ctx={ctx} />
      </div>
    </div>
  );
}
