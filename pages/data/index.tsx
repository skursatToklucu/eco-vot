import React from "react";
import {
  BasePage,
  DataContributions,
  DataDifference,
  DataDisclaimer,
  DataHeader,
  DataPrizePool,
} from "@components";
import {
  ArcElement,
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const title = "Data | NeutralStack.io";
const meta =
  "Our data visualization area when you can see the breakdown of DotA 2's The International and enter in your contribution for a customized data view";
const metaImage =
  "https://neutralstack.io/_next/image?url=%2Fimages%2Flogo.png";


Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Index() {
  return (
    <BasePage
      title={title}
      meta={meta}
      metaDesc={meta}
      metaTitle={title}
      metaImage={metaImage}
    >
      <DataHeader />
      <DataDifference />
      <DataPrizePool />
      <DataContributions />
      <DataDisclaimer />
    </BasePage>
  );
}
