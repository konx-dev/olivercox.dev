import { getExperience } from '@/sanity/queries/experience';
import Link from 'next/link';
import DateRange from '../atom/DateRange';
import RichText from '../atom/RichText';
import ExperienceCard from './cards/ExperienceCard';
import SectionHeading from '../atom/SectionHeading';

export default async function Experience() {
  const experience = await getExperience();

  return (
    <div className="mb-8 lg:mb-16">
      <SectionHeading heading={'Experience'} />
      <div className="flex flex-col gap-5">
        {experience.map((entry) => (
          <ExperienceCard key={entry._id} ctx={entry} />
        ))}
      </div>
      <div className="text-body font-medium mt-6">
        <Link href="https://cv.konx.dev/" rel="noopener noreferrer" target="_blank">
          View Full Resume
        </Link>
      </div>
    </div>
  );
}
