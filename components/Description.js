import React from "react";
import styles from "../styles/Home.module.scss";
import { attributes } from "../content/Description/Description.md";

const desc = () => {
  const { body } = attributes;

  const handleClickBtn = () => {
    const btn = document.getElementsByTagName("a");
    btn.style.boxShadow = "rgb(0 0 0 / 13%) 0px 3px 5px inset";
  };
  return (
    <section id={styles.description} className={styles.description}>
      <div className={styles.container}>
        <div className={`${styles.description__wrap} ${styles.box__shadow}`}>
          <div className={styles.description__content}>
            <p>
              {body}
              {/* Hello! I’m Bui Van Hoa. Junior Web Developer with over 1 years of
              experience specializing in front end development. Experienced with
              all stages of the development cycle for dynamic web
              projects.Having an in-depth knowledge including advanced HTML5,
              CSS, CSS3, SASS, LESS, JSON, XML, Java, JavaScript, JQuery,
              Angular JS. Strong background in management and leadership. */}
            </p>
          </div>
          <div className={styles.description__btn}>
            <a onClick={handleClickBtn} href='#'>
              download cv
            </a>
            <a onClick={handleClickBtn} href='#'>
              contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default desc;
