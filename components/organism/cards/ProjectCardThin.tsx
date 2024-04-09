import { Project } from '@/types/Project';
import { builtWithConvert, dateConvert } from '@/helpers';
import { MdLaunch } from 'react-icons/md';
import Link from 'next/link';

export default function ProjectCard({ ctx, position }: { ctx: Project; position: number }) {
  return (
    <Link
      href={`${ctx.url ? ctx.url : null}`}
      rel="noopener noreferrer"
      target="_blank"
      className={`flex flex-row md:gap-4 lg:gap-12 font-medium text-sm ${ctx.url ? '' : 'pointer-events-none'}`}>
      <div className="flex flex-col w-1/4 md:w-[5%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Year</div>}
        <div className="py-4">{dateConvert(ctx.year, 'yyyy')}</div>
      </div>
      <div className="flex flex-col w-3/4 md:w-[30%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Project</div>}
        <div className="py-4">{ctx.name}</div>
      </div>
      <div className="hidden md:flex md:flex-col md:w-[10%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Made at</div>}
        {ctx.madeAt && <div className="py-4 capitalize">{ctx.madeAt}</div>}
      </div>
      <div className="hidden md:flex md:flex-col md:w-[50%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Built with</div>}
        {ctx.builtWith && <div className="dark:text-black-500 py-4">{builtWithConvert(ctx.builtWith)}</div>}
      </div>
      <div className="hidden md:flex md:flex-col md:w-[5%]">
        {position === 0 && <div className="text-red-500 dark:text-blue-500 text-sm">Link</div>}
        {ctx.url && (
          <div className="py-4">
            <MdLaunch />
          </div>
        )}
      </div>
    </Link>
  );
}
