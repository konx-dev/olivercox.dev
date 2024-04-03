'use client';

import { useRouter } from 'next/navigation';
import { MdArrowRightAlt } from 'react-icons/md';

export default function ClientButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex flex-row gap-2 items-center">
      <span className="text-body font-medium underline">Go Back</span>
    </button>
  );
}
