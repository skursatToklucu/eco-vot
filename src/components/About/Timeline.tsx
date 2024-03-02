import React from "react";

export default function Timeline() {
  return (
    <div className="max-w-2xl mx-auto py-10" id="timeline">
      <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-10 sm:text-4xl">
        Our Timeline
      </h2>
      <ol className="relative border-l border-gray-200 mx-6">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            June 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">Awareness</h3>
          <p className="mb-4 text-base font-normal text-gray-400">
            Initiate a promotional campaign for the site across multiple channels, such as Reddit and Twitter, in order to effectively gauge the level of interest in the project.
          </p>
          {/* An example button that we could use to link to other pages */}
          {/* <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Learn more
          </a> */}
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            July 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">Start Fundraising</h3>
          <p className="text-base font-normal text-gray-400">
            Establish a Kickstarter campaign to initiate the fundraising process.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            August 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            Increase Internet Prescence
          </h3>
          <p className="text-base font-normal text-gray-400">
            Develop a brand and social media presence for the team.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            September 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            Scouting
          </h3>
          <p className="text-base font-normal text-gray-400">
            Scout potential players through various channels.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            October 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            End Fundraising
          </h3>
          <p className="text-base font-normal text-gray-400">
            Assess fundraising levels and decide whether to proceed or refund the money.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            November 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            Practice
          </h3>
          <p className="text-base font-normal text-gray-400">
            Begin team practice to increase team cohesion and performance.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            December 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
            Team Registration
          </h3>
          <p className="text-base font-normal text-gray-400">
            Register the team and participate in open qualifiers as part of the competitive esports scene.
          </p>
        </li>
      </ol>
    </div>
  );
}
