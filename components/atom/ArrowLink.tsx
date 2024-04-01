import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

export default function ArrowLink({ target, callToAction }: { target: string; callToAction: string }) {
  return (
    <Link href={target} className="flex flex-row gap-2 items-center">
      <span className="text-body font-medium">{callToAction}</span>
      <span className="text-[1.5rem]">
        <MdArrowRightAlt />
      </span>
    </Link>
  );
}

// Currently only works for internal links
