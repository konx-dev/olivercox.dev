import { dateConvert } from '@/helpers';
import { Insight } from '@/types/Insight';
import Image from 'next/image';
import Link from 'next/link';

export default function InsightCard({ ctx }: { ctx: Insight }) {
  return (
    <Link
      href={`/insights/${ctx.slug}`}
      className="flex flex-col lg:flex-row lg:items-center lg:gap-4 sm:w-[48%] lg:w-full border border-black-700 transition-colors duration-200 hover:bg-white-100 dark:hover:bg-black-900 p-4 rounded-lg">
      <div className="h-[160px] lg:min-w-[140px] lg:h-[80px]">
        <Image
          className="h-[160px] lg:h-[80px] lg:w-[140px] w-full object-cover rounded-lg"
          src={ctx.image}
          alt={ctx.alt}
          width={350}
          height={160}
        />
      </div>
      <div className="mt-4 lg:mt-0">
        <div className="text-xs leading-tight font-bold text-red-500 dark:text-blue-500">
          {dateConvert(ctx.publishedDate, 'do MMMM, yyyy')}
        </div>
        <div className="mt-2 text-black-900 dark:text-white-700 text-lg leading-tight font-medium">
          <div className="">{ctx.name}</div>
        </div>
      </div>
    </Link>
  );
}
