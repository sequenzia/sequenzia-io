export default function Footer() {
  const today = new Date();

  return (
    <footer className="footer footer-center block mb-5 pt-10">
      <div className="pb-2">
        &copy; {today.getFullYear()} Stephen Sequenzia
      </div>
      <div className="inline opacity-75">
        Built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Next.js
        </a>
      </div>
    </footer>
  );
}
