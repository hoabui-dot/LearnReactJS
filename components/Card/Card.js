import React from "react";
import { attributes } from "../../content/Card/Card.md";
import Image from "next/image";
import styles from "./Card.module.scss";

const Card = () => {
  let { thumbnail, title } = attributes;

  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <div className={styles.card__wrap}>
          <div className={styles.card__content}>
            <div className={styles.card__name}>
              <h4>{title}</h4>
              <h6>Software Engineer & UX/UI Expert</h6>
              <Image src={thumbnail} alt={"hehehe"} height={400} width={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
