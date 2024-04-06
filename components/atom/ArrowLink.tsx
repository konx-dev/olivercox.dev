import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

export default function ArrowLink({
  target,
  callToAction,
  reversed
}: {
  target: string;
  callToAction: string;
  reversed?: boolean;
}) {
  return (
    <Link href={target} className={`flex gap-2 items-center ${reversed ? 'flex-row-reverse' : 'flex-row'}`}>
      <span className="text-body font-medium">{callToAction}</span>
      <span className={`text-[1.5rem] ${reversed ? 'rotate-180' : null}`}>
        <MdArrowRightAlt />
      </span>
    </Link>
  );
}

// Currently only works for internal links
