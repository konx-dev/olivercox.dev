import { PortableText } from '@portabletext/react';

export default function ContentSimple({ ctx }: { ctx: any }) {
  return (
    <div className="my-5 lg:my-10 pb-wysiwyg">
      <PortableText value={ctx.content} />
    </div>
  );
}
