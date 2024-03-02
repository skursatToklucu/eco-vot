import React from "react";
import PreviewTile from "../../src/components/Blog/PreviewTile";
import { getSortedPostsData } from "../../src/libs/posts";
import { BasePage } from "@components";
import { PostPreview } from "@types";

type Props = {
  postData: PostPreview[];
};

// Runs at build time
export async function getStaticProps() {
  const postData = getSortedPostsData();
  return {
    props: {
      postData,
    },
  };
}

const title = "Blog | NeutralStack.io";
const meta =
  "Read the most current news, upcoming matches, and technical information for the world's first community owned eSports team.";
const metaImage =
  "https://neutralstack.io/_next/image?url=%2Fimages%2Flogo.png";

export default function Index({ postData }: Props) {
  return (
    <BasePage
      title={title}
      meta={meta}
      metaDesc={meta}
      metaTitle={title}
      metaImage={metaImage}
    >
      <article>
        <h1 className="text-center text-3xl p-5">Recent Posts</h1>
        <div className="container mx-auto">
          {postData.map((preview: PostPreview) => (
            <PreviewTile key={preview.id} preview={preview} />
          ))}
        </div>
      </article>
    </BasePage>
  );
}
