import Image from 'next/image';

export default function ImageSingle({ ctx }: { ctx: any }) {
  return (
    <>
      <div>{ctx.image.asset._ref}</div>
      <div>{ctx.image.alt}</div>
    </>
  );
}
