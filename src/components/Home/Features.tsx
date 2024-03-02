import React from "react";
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <div className="container mx-auto bg-white">
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">
              Power To The Players
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Power of Crowdfunding in Esports
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              A Closer Look at Our Crowdfunded Esports Team
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <GlobeAltIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    Support Your Players
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Support the growth of esports by empowering emerging talent with resources to compete at the highest level. Your donation can help up-and-coming players achieve greatness.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <ScaleIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    1:1 Voting Power
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Maximize your impact on our team&apos;s decisions by donating more and increasing your voting power. The higher your contribution, the more influence you&apos;ll have in shaping the team&apos;s future.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <BoltIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    Money Back Guarantee
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    With our no-risk donation policy, you can support our team with confidence knowing that if we do not make it past the open qualifiers or fail to reach our fundraising goal, you will receive a full refund.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <DevicePhoneMobileIcon />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    True Transparency
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Stay informed about where your hard-earned money is going with our monthly publication of bank statements, ensuring complete transparency of your donation&apos;s impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
