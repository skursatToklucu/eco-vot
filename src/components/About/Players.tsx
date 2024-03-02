import React from "react";
import { Player } from "@types";
import PlayerCard from "./PlayerCard";

type props = {
  players: Player[];
};

export default function Players({ players }: props) {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Team
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-around md:flex-wrap md:items-stretch md:py-16 md:px-8">
        {players.map((player) => (
          <PlayerCard key={player.role} player={player} />
        ))}
      </div>
    </div>
  );
}
