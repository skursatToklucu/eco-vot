import React from "react";
import { Player } from "@types";
import {
  BasePage,
  CallToAction,
  Goals,
  Players,
  Products,
  Statement,
  Timeline,
} from "@components";
import { getPlayers } from "../../src/libs/about";

type props = {
  players: Player[];
};

// Runs at build time
export async function getStaticProps() {
  const players = getPlayers();
  return {
    props: {
      players,
    },
  };
}

const title = "About Us | NeutralStack.io";
const meta =
  "Our mission statement and goals as well as the team compisition of the world's first community owned eSports team. Find out who we are and what our plan is.";
const metaImage =
  "https://neutralstack.io/_next/image?url=%2Fimages%2Flogo.png";

export default function Index({ players }: props) {
  return (
    <BasePage
      title={title}
      meta={meta}
      metaDesc={meta}
      metaTitle={title}
      metaImage={metaImage}
    >
      <Statement />
      <Goals />
      <Timeline />
      <Products />
      <CallToAction />
      <Players players={players} />
    </BasePage>
  );
}
