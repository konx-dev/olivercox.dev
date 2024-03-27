import { PortableText } from '@portabletext/react';

export default function ContentSimple({ ctx }: { ctx: any }) {
  return (
    <>
      <PortableText value={ctx.content} />
    </>
  );
}
