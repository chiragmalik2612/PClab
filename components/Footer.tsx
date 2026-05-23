import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:justify-between md:items-center">
        <p className="text-sm">
          &copy; {currentYear} Advanced Lab Website. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex justify-center space-x-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/publications" className="hover:text-white transition-colors">Research</Link>
        </div>
      </div>
    </footer>
  );
}