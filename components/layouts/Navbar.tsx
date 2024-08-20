"use client";
import { useState } from "react";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { ModeToggle } from "../toogle-mode";
import navlinks from '../../data/navlinks.json'
import whiteImg from '../../public/images/whitemode.png'
import darkImg from '../../public/images/darkmode.png'
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 py-2 top-0 z-50 bg-white shadow dark:bg-gray-950">
      <div className="container px-4 md:px-20">
        <div className="flex h-14 items-center justify-between">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
           <Image className="h-14 w-14 block dark:hidden" src={whiteImg} width={250} height={250} alt="logo" />
           <Image className="h-14 w-14 hidden dark:block" src={darkImg} width={250} height={250} alt="logo" />
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
              <MenuIcon className="w-14 h-14" />
            </button>
          </div>
          <nav className={` relative hidden md:flex items-center space-x-4`}>
            {navlinks.map((link) => (
              <Link key={link.id}
                href={link.link} 
                className="font-medium  text-md border-b-2 border-transparent transition-colors hover:text-primary hover:border-primary py-3"
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
                  className="text-md cursor-pointer font-medium transition-colors hover:text-primary dark:hover:text-primary"
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
