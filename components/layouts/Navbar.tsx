"use client";
import { useState } from "react";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { ModeToggle } from "../toogle-mode";
import navlinks from '../../public/data/navlinks.json'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 py-2 top-0 z-50 bg-white shadow dark:bg-gray-950">
      <div className="container px-4 md:px-20">
        <div className="flex h-14 items-center justify-between">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <PackageIcon className="w-10 h-10" />
            <span>Riche Makso</span>
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              title="Toggle menu"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 dark:text-gray-200 focus:outline-none"
            >
              <MenuIcon className="w-10 h-10" />
            </button>
          </div>
          <nav className={` relative hidden md:flex items-center space-x-4`}>
            {navlinks.map((link) => (
              <Link key={link.id}
                href={link.link}
                className="font-medium text-md border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                prefetch={false}
              >
                {link.name}
              </Link>
            ))}
            <div className=" h-full flex items-start justify-start">
            <ModeToggle />
          </div>
          </nav>
          
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="relative flex flex-col space-y-4 mt-4">
              {navlinks.map((link) => (
                <Link key={link.id}
                  href={link.link}
                  className="text-md cursor-pointer font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  {link.name}
                </Link>
              ))}
              <div className=" bottom-0 h-full flex items-start">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}

function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
