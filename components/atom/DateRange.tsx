import { dateConvert } from '@/helpers';

export default function DateRange({ from, to }: { from: string; to: string }) {
  // Using datefns helper to convert the sanity.io provided date
  const formattedFrom = dateConvert(from);
  const formattedTo = dateConvert(to);

  return (
    <>
      {formattedFrom} - {formattedTo}
    </>
  );
}
