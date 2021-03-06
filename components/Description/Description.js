import React from "react";
import styles from "./Description.module.scss";
import { attributes } from "../../content/Description/Description.md";

const desc = () => {
  const { description } = attributes;

  const handleClickBtn = () => {
    const btn = document.getElementsByTagName("a");
    btn.style.boxShadow = "rgb(0 0 0 / 13%) 0px 3px 5px inset";
  };
  return (
    <section id={styles.description} className={styles.description}>
      <div className={styles.container}>
        <div className={`${styles.description__wrap} ${styles.box__shadow}`}>
          <div className={styles.description__content}>
            <p>{description}</p>
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
