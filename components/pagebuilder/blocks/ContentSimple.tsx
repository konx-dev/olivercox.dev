import { PortableText } from '@portabletext/react';
import { TypedObject } from 'sanity';

type ContentBlock = {
  content: TypedObject;
};

export default function ContentSimple({ ctx }: { ctx: ContentBlock }) {
  return (
    <div className="my-5 lg:my-10 pb-wysiwyg">
      <PortableText value={ctx.content} />
    </div>
  );
}
