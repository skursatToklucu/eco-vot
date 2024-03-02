import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Poll as PollType } from "@types";
import { BasePage, Poll } from "@components";
import { RequestContext } from "next/dist/server/base-server";

type Props = {
  polls: PollType[];
};

export async function getServerSideProps({ req }: RequestContext) {
  const jwt = Cookies.get(req.headers.cookie || "");
  const pollsData = await axios.get("polls", {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });

  return {
    props: {
      polls: pollsData.data,
    },
  };
}

const title = "Polls | NeutralStack.io";
const meta =
  "View and vote in community run polls. Let your voice be heard by the world's first ever community owned eSports team.";
const metaImage =
  "https://neutralstack.io/_next/image?url=%2Fimages%2Flogo.png";

export default function Index({ polls }: Props) {
  return (
    <BasePage
      title={title}
      meta={meta}
      metaDesc={meta}
      metaTitle={title}
      metaImage={metaImage}
    >
      <h1 className="text-center text-3xl p-5">Polls</h1>
      <div className="container mx-auto">
        {polls.map((poll: PollType) => {
          return <Poll key={poll.id} poll={poll} />;
        })}
      </div>
    </BasePage>
  );
}
