import Link from 'next/link';

function NotFoundPage() {
  return (
    <div>
      <h1>Oops.. something went wrong</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFoundPage;
