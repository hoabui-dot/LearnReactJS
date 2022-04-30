import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const TitleSection = ({ icon, title }) => {
  return (
    <div className={styles.title}>
      <div className={styles.title__wrap}>
        <div className={styles.titleImg}>
          <Image
            src={icon}
            width={45}
            height={45}
            alt='Icon Title Section'
            style={{ marginBottom: "-3px" }}
          />
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TitleSection;
