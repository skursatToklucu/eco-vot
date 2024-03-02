import Image from "next/image";
import React from "react";
import { Player } from "@types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type props = {
  player: Player;
};

export default function PlayerCard({ player }: props) {
  return (
    // <!-- component -->
    // <!-- This is an example component -->
    <div className="flex items-center justify-center mb-10">
      <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl md:max-w-sm rounded-xl">
        <div className="pb-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full">
              <div className="relative">
                <Image
                  src={player.img}
                  alt={player.alt}
                  width={300}
                  height={300}
                  className="shadow-xl border-white border-indigo-800 rounded-full align-middle border-2 absolute -m-16 -ml-18 lg:-ml-16 max-w-[125px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 mt-20 text-center">
            <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-600">
              {player.name ?? "Unknown"}
            </h3>
            <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
              {/* <!-- /typography/_h3.antlers.html --> */}
              <div className="text-sm font-bold tracking-wide text-gray-600 text-gray-400 font-mono text-xl">
                {player.role}
              </div>
              {/* <!-- End: /typography/_h3.antlers.html --> */}
            </div>
            <div className="w-full text-center">
              <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                {player.link && (
                  <a
                    href={player.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm font-medium text-center flex flex-row text-gray-600 hover:text-gray-400"
                  >
                    <span>liquipedia</span>
                    <ArrowTopRightOnSquareIcon className="ml-1 w-4 h-full" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 border-gray-700/50">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-6">
                <p className="mb-4 font-light leading-relaxed text-gray-600 text-gray-400">
                  {player.desc ?? ""}
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
            <div className="absolute flex -space-x-12 rounded-b-2xl">
              <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-indigo-400/90 group-hover:bg-indigo-600/90 z-10"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-indigo-300/90 group-hover:bg-indigo-500/90 z-20"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-indigo-200/90 group-hover:bg-indigo-400/90 z-30"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-indigo-100/90 group-hover:bg-indigo-300/90 z-40"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-indigo-50/90 group-hover:bg-indigo-200/90 z-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
