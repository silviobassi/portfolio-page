"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  return (
    <nav className="w-full bg-fuchsia-800 h-16 flex items-center pr-4">
      <div className="w-full flex justify-end md:hidden">
        <button
          onClick={toggleMenu}
          className={"text-white focus:outline-none"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`w-[100%] bg-gray-100 absolute top-16 flex flex-col transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Link className="text-gray-700 hover:bg-gray-400 p-4" href="/">
          Home
        </Link>
        <Link className="text-gray-700  hover:bg-gray-400  p-4" href="/about">
          Portfolio
        </Link>
        <Link className="text-gray-700  hover:bg-gray-400 p-4" href="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
