import React from "react";

export default function DataHeader() {
  return (
    <div className="container mx-auto">
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">
              Neutral Stack
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Data
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Get a broken down view of where your money went for DotA 2&apos;s The International 2022 including valve and user contributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
