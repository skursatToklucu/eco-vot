import Head from "next/head";
import React from "react";

import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";

type Props = {
  children: React.ReactNode;
  title: string;
  meta?: string;
  metaDesc?: string;
  metaTitle?: string;
  metaImage?: string;
};

export default function BasePage({
  children,
  title,
  meta,
  metaDesc,
  metaTitle,
  metaImage,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta && <meta name="description" content={meta} key="desc" />}
        {/* This description for so social shares? Not really sure but it comes up in like the description section when you share a page I think */}
        {metaDesc && <meta property="og:description" content={meta} />}
        {metaTitle && <meta property="og:title" content={metaTitle} />}
        {metaImage && <meta property="og:image" content={metaImage} />}
      </Head>
      <div className="flex flex-col h-screen">
        <Menu />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}
