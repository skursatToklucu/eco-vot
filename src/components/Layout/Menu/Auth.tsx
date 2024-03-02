import React from "react";
import Link from "next/link";
import { useCurrentUser } from "@data";
import { BoltIcon } from "@heroicons/react/24/outline";

export default function Auth() {
  const user = useCurrentUser();
  return (
    <div className="flex flex-col lg:flex-row">
      {user ? (
        <>
          <p className="px-4 py-1.5 text-base leading-7 text-indigo-600 text-center ">
            <BoltIcon className="mr-2 h-5 w-5 inline" aria-hidden="true" />
            Voting Power: {user.power}
          </p>
          <Link
            href="/auth/logout"
            className="px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 hover:text-indigo-700"
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/auth/signup"
            className="px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 hover:text-indigo-700 mb-3 lg:mb-0"
          >
            Signup
          </Link>
          <Link
            href="/auth/login"
            className="rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
