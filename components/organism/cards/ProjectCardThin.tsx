import { Project } from '@/types/Project';
import { builtWithConvert, dateConvert } from '@/helpers';

export default function ProjectCard({ ctx, position }: { ctx: Project; position: Number }) {
  return (
    <div className="flex flex-row md:gap-4 lg:gap-12 font-medium text-heading-sm">
      <div className="flex flex-col w-1/4 md:w-[10%]">
        {position === 0 && <div className="text-black-500 text-sm">Year</div>}
        <div className="py-4">{dateConvert(ctx.year, 'yyyy')}</div>
      </div>
      <div className="flex flex-col w-3/4 md:w-[25%]">
        {position === 0 && <div className="text-black-500 text-sm">Project</div>}
        <div className="py-4">{ctx.name}</div>
      </div>
      <div className="hidden md:flex md:flex-col md:w-[10%]">
        {position === 0 && <div className="text-black-500 text-sm">Made at</div>}
        {ctx.madeAt && <div className="py-4 capitalize">{ctx.madeAt}</div>}
      </div>
      <div className="hidden md:flex md:flex-col md:w-[45%]">
        {position === 0 && <div className="text-black-500 text-sm">Built with</div>}
        {ctx.builtWith && <div className="py-4">{builtWithConvert(ctx.builtWith)}</div>}
      </div>
      <div className="hidden md:flex md:flex-col md:w-[10%]">
        {position === 0 && <div className="text-black-500 text-sm">Link</div>}
        <div className="py-4">X</div>
      </div>
    </div>
  );
}
