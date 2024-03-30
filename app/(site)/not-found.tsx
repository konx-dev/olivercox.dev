'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

function NotFoundPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Oops.. something went wrong</h1>
      <button onClick={() => router.back()}>Go Back</button>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFoundPage;
