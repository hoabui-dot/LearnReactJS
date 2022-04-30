import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Banner from "../components/Banner";
export default function Home() {
  return (
    <>
      <Head>
        <title>Demo Blog</title>
      </Head>
      <Banner />
    </>
  );
}

export async function getStaticProps() {
  // List of files in blogs folder
  const filesInBlogs = fs.readdirSync("./content/blogs");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
