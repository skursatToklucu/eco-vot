import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-50 mt-5">
      <div className="mx-auto max-w-7xl py-6 px-3 lg:flex lg:items-center lg:justify-between lg:py-8 lg:px-4">
        <p className="w-full text-md font-bold tracking-tight text-indigo-700 text-right">
          {new Date().getFullYear()} NeutralStack. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
