import DateRange from '@/components/atom/DateRange';
import RichText from '@/components/atom/RichText';

import { Experience } from '@/types/Experience';

export default function ExperienceCard({ ctx }: { ctx: Experience }) {
  return (
    <div className="">
      <div>
        <div className="mb-1">
          <span className="text-xs lg:text-base font-medium">{ctx.company}</span>
          <span className="text-red-500 dark:text-blue-500 px-2">|</span>
          <span className="text-xs text-black-900 dark:text-black-500">
            <DateRange from={ctx.startYear} to={ctx.endYear} />
          </span>
        </div>
        <div className="font-medium text-heading-sm mb-2">{ctx.role}</div>
        <div className="text-body text-black-900 dark:text-black-500">
          <RichText ctx={ctx.description} />
        </div>
      </div>
    </div>
  );
}
