import { Project } from '@/types/Project';
import RichText from '@/components/atom/RichText';
import Image from 'next/image';

export default function ProjectCard({ ctx }: { ctx: Project }) {
  return (
    <div className="border border-black-700 bg-white-100 dark:bg-black-900 p-4 rounded-lg">
      <div className="h-[180px]">
        <Image
          className="h-[180px] w-full object-cover rounded-lg"
          src={ctx.image}
          alt={ctx.alt}
          width={350}
          height={180}
        />
      </div>
      <div className="mt-4 text-sm font-medium dark:text-black-500">
        <RichText ctx={ctx.content} />
      </div>
      <div className="mt-2 text-base font-bold lg:text-sm dark:text-white-700">{ctx.name}</div>
      {/* <div>{ctx.url}</div> */}
      {/* <div>{ctx.builtWith}</div> */}
    </div>
  );
}
