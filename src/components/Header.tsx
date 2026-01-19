import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-dark-gray text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4">
            <Image src="/images/logo.png" alt="Temple CPE Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">Temple University's Center for Pathogen Evolution (CPE)</span>
          </Link>
          <div className="space-x-6">
            <Link href="/evolutionary-questions" className="hover:text-temple-red transition-colors">Evolutionary Questions</Link>
            <Link href="/people" className="hover:text-temple-red transition-colors">People</Link>
            <Link href="/news" className="hover:text-temple-red transition-colors">News</Link>
            <Link href="/publications" className="hover:text-temple-red transition-colors">Publications</Link>
            <Link href="/software" className="hover:text-temple-red transition-colors">Software</Link>
            <Link href="/about" className="hover:text-temple-red transition-colors">About</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
