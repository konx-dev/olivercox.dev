import { dateConvert } from '@/helpers';
import Link from 'next/link';
import { Insight } from '@/types/Insight';

export default function InsightCard({ ctx, position }: { ctx: Insight; position: number }) {
  return (
    <Link href={`insights/${ctx.slug}`} className="flex flex-row md:gap-4 lg:gap-12 font-medium text-sm">
      <div className="flex flex-col w-1/4 md:w-[5%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Year</div>}
        <div className="py-4">{dateConvert(ctx.publishedDate, 'yyyy')}</div>
      </div>
      <div className="flex flex-col w-3/4 md:w-[40%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Title</div>}
        <div className="py-4">{ctx.name}</div>
      </div>
      <div className="hidden md:flex md:flex-col md:w-[55%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Description</div>}
        {ctx.description && <div className="text-black-500 py-4">{ctx.description}</div>}
      </div>
    </Link>
  );
}
