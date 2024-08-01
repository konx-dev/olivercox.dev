import { PortableText } from '@portabletext/react';
import { TypedObject } from 'sanity';

type Quote = {
  body: TypedObject;
  author: string;
};

export default function Quote({ ctx }: { ctx: Quote }) {
  return (
    <div className="my-5 lg:my-10">
      <div className="text-heading-xl font-primary font-bold">
        <PortableText value={ctx.body} />
      </div>
      <div className="text-heading-lg mt-5 font-normal font-primary">- {ctx.author}</div>
    </div>
  );
}
