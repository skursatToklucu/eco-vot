import React from "react";

import { getSortedPostsData } from "../src/libs/posts";
import {
  BasePage,
  BlogPreview,
  CallToAction,
  Features,
  Hero,
  Newsletter,
  Promo,
} from "@components";
import { PostPreview } from "@types";

type Props = {
  postPreviews: PostPreview[];
};

// Runs at build time
export async function getStaticProps() {
  const postPreviews = getSortedPostsData();
  return {
    props: {
      postPreviews,
    },
  };
}

const title = "Home | NeutralStack.io";
const meta =
  "Join the first ever community owned eSports team and let your voice be heard in our community run polls. Help support the players you love and the game you enjoy.";
const metaImage =
  "https://neutralstack.io/_next/image?url=%2Fimages%2Flogo.png";

export default function Home({ postPreviews }: Props) {
  return (
    <BasePage
      title={title}
      meta={meta}
      metaDesc={meta}
      metaTitle={title}
      metaImage={metaImage}
    >
      <Hero />
      <Features />
      <Newsletter />
      <Promo />
      <CallToAction />
      <BlogPreview postPreviews={postPreviews} />
    </BasePage>
  );
}
