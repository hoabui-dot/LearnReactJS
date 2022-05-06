import React from "react";
import styles from "./TitleSection.module.scss";

const TitleSection = ({ urlIcon, icon, title }) => {
  return (
    <div className={styles.title}>
      <div className={styles.title__wrap}>
        {icon ? (
          <i className={`${styles.animated} ${icon}`}></i>
        ) : (
          <img
            className={`${styles.animated} ${styles.fade}`}
            src={urlIcon.src}
            alt='Icon Title Section'
          />
        )}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TitleSection;
