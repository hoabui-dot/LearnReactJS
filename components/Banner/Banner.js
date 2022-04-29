import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";

const Banner = () => {
  let { avatar } = attributes;

  return (
    <div className={styles.header__background}>
      <Image src={avatar} />
    </div>
  );
};

export default Banner;
