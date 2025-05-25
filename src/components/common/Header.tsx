'use client';

import Image from 'next/image';
import Logo from '@/../public/logo.svg';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Header() {
  const isLoggedIn = false;

  return (
    <header className="flex items-center justify-between px-4">
      <Link href="/" className="flex items-center">
        <div className="flex flex-row items-center justify-center">
          <Image src={Logo} alt="Header Image" width={100} height={200} />
          <h3 className="font-extrabold text-gray-900">Resumir</h3>
        </div>
      </Link>
      <div className="flex lg:items-center lg:justify-center lg:gap-20 px-6 sm:gap-2">
        <span className="hidden md:flex gap-4">
          <NavLink href="/about">About</NavLink>
        </span>
        <span className="hidden md:flex gap-4">
          <NavLink href="#pricing">Pricing</NavLink>
        </span>
        {isLoggedIn && (
          <span className="hidden md:flex gap-4">
            <NavLink href="/dashboard">Your Summaries</NavLink>
          </span>
        )}
        <span className="md:flex gap-4">
          {isLoggedIn ? (
            <NavLink href="/upload-pdf">Upload PDF</NavLink>
          ) : (
            <NavLink href="/sign-in">Sign In</NavLink>
          )}
        </span>
      </div>
    </header>
  );
}
