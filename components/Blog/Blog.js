import React from "react";
import BlogItem from "./BlogItem";
import TitleSection from "../TitleSection/TitleSection";
import postIt from "../../assets/images/post-it.png";
import { attributes } from "../../content/Home.md";
import styles from "./Blog.module.scss";

const Blog = () => {
  const { Blog } = attributes;

  const dataBlog = [Blog.blogItem1, Blog.blogItem2, Blog.blogItem3];

  return (
    <section id={styles.blog} className={styles.section}>
      <div className={styles.container}>
        <TitleSection title='blog' urlIcon={postIt} />
        <div className={styles.blog}>
          <div className={styles.blog__wrap}>
            {dataBlog &&
              !!dataBlog.length &&
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
