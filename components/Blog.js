import React from "react";
import BlogItem from "./BlogItem";
import TitleSection from "./TitleSection";
import postIt from "../public/uploads/post-it.png";
import { attributes } from "../content/Blog/Blog.md";
import styles from "../styles/Home.module.scss";

const Blog = () => {
  const {
    blogImg1,
    text1,
    jobName1,
    work1,
    workTitle1,
    description1,
    blogImg2,
    text2,
    jobName2,
    work2,
    workTitle2,
    description2,
    blogImg3,
    text3,
    jobName3,
    work3,
    workTitle3,
    description3,
  } = attributes;

  const dataBlog = [
    {
      image: blogImg1,
      fieldWork: text1,
      jobName: jobName1,
      work: work1,
      workTitle: workTitle1,
      workDescription: description1,
    },
    {
      image: blogImg2,
      fieldWork: text2,
      jobName: jobName2,
      work: work2,
      workTitle: workTitle2,
      workDescription: description2,
    },
    {
      image: blogImg3,
      fieldWork: text3,
      jobName: jobName3,
      work: work3,
      workTitle: workTitle3,
      workDescription: description3,
    },
  ];

  return (
    <section id={styles.blog} className={styles.section}>
      <div className={styles.container}>
        <TitleSection title='blog' icon={postIt} />
        <div className={styles.blog}>
          <div className={styles.blog__wrap}>
            {dataBlog &&
              dataBlog.map((data, index) => (
                <BlogItem
                  flip={index % 2 == 0 ? "" : styles.flip}
                  data={data}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
