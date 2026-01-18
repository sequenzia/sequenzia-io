import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h3 className="text-2xl">The page you&apos;re looking for couldn&apos;t be found.</h3>
      <Link className="btn btn-accent mt-9" href="/">
        Home
      </Link>
    </div>
  );
}
