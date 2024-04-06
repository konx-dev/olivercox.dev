import { Project } from '@/types/Project';
import RichText from '@/components/atom/RichText';
import Image from 'next/image';
import { builtWithConvert } from '@/helpers';
import Link from 'next/link';
import { MdLaunch } from 'react-icons/md';

export default function ProjectCard({ ctx }: { ctx: Project }) {
  return (
    <Link
      href={ctx.url ? ctx.url : '/'}
      rel="noopener noreferrer"
      target="_blank"
      className={`flex flex-col lg:flex-row lg:items-center lg:gap-4 border border-black-700 transition-colors duration-200  p-4 rounded-lg ${
        ctx.url ? 'hover:bg-white-100 dark:hover:bg-black-900 cursor-pointer' : 'pointer-events-none'
      } `}>
      <div className="h-[160px] lg:min-w-[140px]">
        <Image
          className="h-[160px] lg:w-[140px] w-full object-cover rounded-lg"
          src={ctx.image}
          alt={ctx.alt}
          width={350}
          height={160}
        />
      </div>
      <div className="mt-4 lg:mt-0">
        <div className="text-sm font-medium dark:text-black-500">
          <RichText ctx={ctx.content} />
        </div>
        <div className="mt-2 flex flex-row items-center gap-1">
          <div className="text-base font-bold dark:text-white-700">{ctx.name}</div>
          {ctx.url && (
            <div className="text-sm">
              <MdLaunch />
            </div>
          )}
        </div>

        <div className="text-xs mt-1 text-red-500 dark:text-black-500 font-bold">{builtWithConvert(ctx.builtWith)}</div>
      </div>
    </Link>
  );
}
