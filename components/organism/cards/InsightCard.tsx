import { dateConvert } from '@/helpers';
import { Insight } from '@/types/Insight';
import Image from 'next/image';
import Link from 'next/link';

export default function InsightCard({ ctx }: { ctx: Insight }) {
  return (
    <Link
      href={`/insights/${ctx.slug}`}
      className="border border-black-700 bg-white-100 dark:bg-black-900 p-4 rounded-lg">
      <div className="h-[160px]">
        <Image
          className="h-[160px] w-full object-cover rounded-lg"
          src={ctx.image}
          alt={ctx.alt}
          width={350}
          height={160}
        />
      </div>
      <div className="mt-4 text-xs leading-tight font-bold text-red-500 dark:text-blue-500">
        {dateConvert(ctx.publishedDate)}
      </div>
      <div className="mt-2 text-black-900 dark:text-white-700 text-lg leading-tight font-medium">
        <div className="">{ctx.name}</div>
      </div>
    </Link>
  );
}
