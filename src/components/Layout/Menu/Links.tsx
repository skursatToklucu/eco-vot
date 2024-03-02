import React from "react";
import Link from "next/link";

export default function Links() {
  return (
    <>
      <Link
        href="/about"
        className="font-semibold text-gray-900 hover:text-gray-900 block px-4 py-3 lg:px-0 lg:py-0 hover:text-indigo-700"
      >
        About
      </Link>
      <Link
        href="/blog"
        className="font-semibold text-gray-900 hover:text-gray-900 block px-4 py-3 lg:px-0 lg:py-0 hover:text-indigo-700"
      >
        Blog
      </Link>
      <Link
        href="/data"
        className="font-semibold text-gray-900 hover:text-gray-900 block px-4 py-3 lg:px-0 lg:py-0 hover:text-indigo-700"
      >
        Data
      </Link>
      <Link
        href="/polls"
        className="font-semibold text-gray-900 hover:text-gray-900 block px-4 py-3 lg:px-0 lg:py-0 hover:text-indigo-700"
      >
        Polls
      </Link>
    </>
  );
}
