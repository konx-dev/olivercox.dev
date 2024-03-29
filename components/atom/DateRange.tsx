import { parse, format } from 'date-fns';

export default function DateRange({ from, to }: { from: string; to: string }) {
  // Using datefns to convert the sanity.io provided date
  const formatDate = (val: string) => {
    const date = parse(val, 'yyyy-MM-dd', new Date());
    return format(date, 'MMM, yyyy');
  };

  const formattedFrom = formatDate(from);
  const formattedTo = formatDate(to);

  return (
    <>
      {formattedFrom} - {formattedTo}
    </>
  );
}
