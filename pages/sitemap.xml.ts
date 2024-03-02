import { PostPreview } from "@types";
import { GetServerSidePropsContext } from "next";
import { getSortedPostsData } from "src/libs/posts";

const EXTERNAL_DATA_URL = "https://neutralstack.io/blog";

function generateSiteMap(posts: PostPreview[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://neutralstack.io</loc>
     </url>
     <url>
       <loc>https://neutralstack.io/about</loc>
     </url>
     <url>
      <loc>https://neutralstack.io/polls</loc>
     </url>
     <url>
      <loc>https://neutralstack.io/login</loc>
     </url>
     <url>
      <loc>https://neutralstack.io/signup</loc>
     </url>
     ${posts
       .map(({ id, date }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
           <lastmod>${date}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  // Gather the blog posts for the site
  const posts = getSortedPostsData();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
