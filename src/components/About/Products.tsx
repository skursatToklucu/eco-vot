import React from "react";
import Image from "next/image";

export default function Products() {
  return (
    <div className="container mx-auto">
      <div className="mx-auto items-center py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Do It
          </h2>
          <p className="mt-4 text-gray-500">
            The community&apos;s support is an indispensable element for the success of this project, and thus it is of greatest importance that their interests take precedence in decision-making processes.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Fund Gathering</dt>
              <dd className="mt-2 text-sm text-gray-500">
                The acquisition of funds will be facilitated through Kickstarter, serving as a means of insurance. In the event that the funding objectives are not met, all funds will be automatically refunded to the donors as per the rules of Kickstarter.
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Player Hiring</dt>
              <dd className="mt-2 text-sm text-gray-500">
                The identification and recruitment of players will be conducted through community engagement and voting mechanisms. The team administrator will oversee the extension of offers, team registration, and player integration.
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Voting</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Each user will be granted one vote for every dollar donated to the team. Voting authority will be conferred upon completion of fundraising and the team&apos;s acceptance into the DPC.
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Player Representation
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                Players are entitled to have a voice in shaping their future. While listed on the team roster, players will be endowed with a number of votes equal to 8% of the overall total, which may be utilized in polls.
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Transparency</dt>
              <dd className="mt-2 text-sm text-gray-500">
                On a monthly basis, a detailed statement of accounts will be available, inclusive of transactional records and corresponding explanations to provide transparency regarding the allocation of funds within the scene.
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Obligations</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Account balances must maintain a minimum amount that is adequate to fulfill all contracted obligations.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
