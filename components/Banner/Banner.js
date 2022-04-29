import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";

const Banner = () => {
  let { thumbnail } = attributes;

  return (
    <div className={styles.header__background}>
      <Image src={thumbnail} alt={"hehe"} />
    </div>
  );
};

export default Banner;
