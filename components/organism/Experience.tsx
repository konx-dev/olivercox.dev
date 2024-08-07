import { getExperience } from '@/sanity/queries/experience';
import Link from 'next/link';
import ExperienceCard from './cards/ExperienceCard';
import SectionHeading from '../atom/SectionHeading';
import { MdArrowRightAlt } from 'react-icons/md';

export default async function Experience() {
  const experience = await getExperience();

  return (
    <div className="">
      <SectionHeading heading={'Experience'} />
      <div className="flex flex-col gap-5">
        {experience.map((entry) => (
          <ExperienceCard key={entry._id} ctx={entry} />
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="https://www.linkedin.com/in/konxdev/"
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-2 items-center">
          <span className="text-body font-medium">View Full LinkedIn Resume</span>
          <span className="text-[1.5rem]">
            <MdArrowRightAlt />
          </span>
        </Link>
      </div>
    </div>
  );
}
