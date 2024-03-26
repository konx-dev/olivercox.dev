import { PortableText } from '@portabletext/react';

export default function ContentSimple({ ctx }: { ctx: any }) {
  return (
    <div>
      <PortableText value={ctx.content} />
    </div>
  );
}
