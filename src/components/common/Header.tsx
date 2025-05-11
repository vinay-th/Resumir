import Image from 'next/image';
import Logo from '@/../public/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4">
      <Link href="/" className="flex items-center">
        <div className="flex flex-row items-center justify-center">
          <Image src={Logo} alt="Header Image" width={100} height={200} />
          <h3 className="font-bold">Resumir</h3>
        </div>
      </Link>
      <div className="flex lg:items-center lg:justify-center lg:gap-20 px-6 sm:gap-2">
        <span className="hidden md:flex gap-4">
          <Link
            href="/about"
            className="text-md font-medium text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
        </span>
        <span className="hidden md:flex gap-4">
          <Link
            href="/pricing"
            className="text-md font-medium text-gray-700 hover:text-gray-900"
          >
            Pricing
          </Link>
        </span>
        <span className="md:flex gap-4">
          <Link
            href="/sign-in"
            className="text-md font-medium text-gray-700 hover:text-gray-900"
          >
            Sign In
          </Link>
        </span>
      </div>
    </header>
  );
}
