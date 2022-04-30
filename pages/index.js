import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss";
import Banner from "../components/Banner";
import ChangeColor from "../components/ChangeColor";
import Description from "../components/Description";
import Education from "../components/Education";
import { useState } from "react";
export default function Home() {
  const [isColor, setIsColor] = useState(styles.green);

  return (
    <div id={styles.body} className={isColor}>
      <Head>
        <title>Demo Blog</title>
      </Head>
      <Banner />
      <Card />
      <Description />
      <Education />
      <ChangeColor setIsColor={setIsColor} />
    </div>
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
