import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";
import {
  attributes,
  react,
} from "../../content/header__background/header__background.md";

const Banner = () => {
  let { thumbnail } = attributes;

  return (
    <div className={styles.header__background}>
      <Image src={thumbnail} alt={"hehe"} width={300} height={300} />
    </div>
  );
};

export default Banner;
