"use client";
import { DropletsIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` sticky top-0 px-4 lg:px-6 h-14 flex items-center  ${isScrolled ? "bg-transparent/5 backdrop-blur-md shadow-md transition-all duration-300" : "bg-transparent"}`}
    >
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <DropletsIcon className="h-6 w-6" />
        <span className="sr-only">JeevanDaan</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/campaigns"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Upcoming Events
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Become a Donor
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
