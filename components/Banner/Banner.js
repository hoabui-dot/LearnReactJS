import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";
import { attributes } from "../../content/header__background/header__background.md";

const Banner = () => {
  let { thumbnail } = attributes;

  return <figure className={styles.header__background}></figure>;
};

export default Banner;
