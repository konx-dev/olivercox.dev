import { getExperience } from '@/sanity/queries/experience';
import Link from 'next/link';

export default async function Experience() {
  const experience = await getExperience();

  return (
    <div>
      <h3>Experience</h3>
      <div>
        {experience.map((entry) => (
          <div key={entry._id}>{entry.role}</div>
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
