import React from "react";

export default function Goals() {
  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      <p className="mx-auto mt-6 max-w-2xl text-lg text-center leading-8 text-gray-600 mb-8">
        This project was started with two important goals in mind
      </p>
      <div className="flex justify-evenly text-center flex-wrap md:flex-nowrap text-lg bg-white  ">
        <div className="w-full">
          <p className="p-10 font-mono">
            Build the world&apos;s first community-owned esports team, empowering users to directly contribute to the growth and development of the professional DotA 2 scene while fostering a strong sense of community and engagement.
          </p>
        </div>
        <div className="w-full border-t-2 md:border-t-0 md:border-l-2 border-dashed border-black">
          <p className="p-10 font-mono">
            Persuade tournament-hosting organizations, particularly Valve, to increase their financial compensation to players at lower levels, with the ultimate goal of lowering the barrier of entry into the world of eSports.
          </p>
        </div>
      </div>
    </div>
  );
}
