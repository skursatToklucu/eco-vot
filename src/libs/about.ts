import { Player } from "@types";

export function getPlayers(): Player[] {
  const players = [
    {
      alt: "A question mark",
      desc: "Will become more useful later in the game if they gain a significant gold advantage. Although they are the powerhouses of the late game, they are relatively weak in the early game",
      img: "/images/about/question.png",
      link: "",
      name: "Our Carry",
      role: "Carry",
    },
    {
      alt: "A question mark",
      desc: "They tend to be most dominant in the midgame, before either their own or the enemy's true carry has amassed enough farm to supersede them.",
      img: "/images/about/question.png",
      link: "",
      name: "Our Mid",
      role: "Mid",
    },
    {
      alt: "A question mark",
      desc: "The offlaner may have to forgo a great deal of farm in order to simply stay alive, and as such may be on the back foot much of the time.",
      img: "/images/about/question.png",
      link: "",
      name: "Our Offlane",
      role: "Offlane",
    },
    {
      alt: "A question mark",
      desc: "Gain substantial damage from abilities and as such do not require gold to be dangerous.",
      img: "/images/about/question.png",
      link: "",
      name: "Our Support",
      role: "Support",
    },
    {
      alt: "A question mark",
      desc: "Can focus less on amassing gold and items, and more on using their abilities to gain an advantage for the team.",
      img: "/images/about/question.png",
      link: "",
      name: "Our Hard Support",
      role: "Hard Support",
    },
  ];
  return players;
}
