import { getExperience } from '@/sanity/queries/experience';
import Link from 'next/link';
import DateRange from '../atom/DateRange';
import RichText from '../atom/RichText';

export default async function Experience() {
  const experience = await getExperience();

  return (
    <div>
      <h3>Experience</h3>
      <div>
        {experience.map((entry) => (
          <div key={entry._id}>
            <div>{entry.role}</div>
            <div>{entry.company}</div>
            <DateRange from={entry.startYear} to={entry.endYear} />
            <RichText ctx={entry.description} />
          </div>
        ))}
      </div>
      <div>
        <Link href="https://cv.konx.dev/" rel="noopener noreferrer" target="_blank">
          View Full Resume
        </Link>
      </div>
    </div>
  );
}
