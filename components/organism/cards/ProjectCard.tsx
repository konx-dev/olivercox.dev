import { Project } from '@/types/Project';
import RichText from '@/components/atom/RichText';
import Image from 'next/image';
import { builtWithConvert } from '@/helpers';

export default function ProjectCard({ ctx }: { ctx: Project }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center vlg:gap-4 border border-black-700 bg-white-100 dark:bg-black-900 p-4 rounded-lg">
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
        <div className="mt-2 text-base font-bold dark:text-white-700">{ctx.name}</div>
        <div className="text-xs mt-1 text-black-500 font-bold">{builtWithConvert(ctx.builtWith)}</div>
      </div>
    </div>
  );
}
