import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Card from "../components/Card/Card";
import styles from "../styles/Home.module.scss";
import Banner from "../components/Banner/Banner";
import ChangeColor from "../components/ChangeColor/ChangeColor";
import Description from "../components/Description/Description";
import Education from "../components/FolderTree/Education/Education";
import Skills from "../components/Skills/Skills";
import { useState } from "react";
import Experience from "../components/FolderTree/Experience/Experience";
import Portfolio from "../components/Portfolio/Portfolio";
import Interest from "../components/Interest/Interest";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
export default function Home() {
  const [isColor, setIsColor] = useState(styles.green);

  return (
    <div id={styles.body} className={isColor}>
      <Head>
        <title>CV ReactJS</title>
      </Head>
      <Banner />
      <Card />
      <Description />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Interest />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
      <ChangeColor setIsColor={setIsColor} />
    </div>
  );
}

export async function getStaticProps() {
  const filesInBlogs = fs.readdirSync("./content/blogs");

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
