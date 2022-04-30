import React from "react";
import styles from "../styles/Home.module.scss";

const TitleSection = ({ urlIcon, icon, title }) => {
  return (
    <div className={styles.title}>
      <div className={styles.title__wrap}>
        {icon ? (
          <i className={`${icon}`}></i>
        ) : (
          <img src={urlIcon} alt='Icon Title Section' />
        )}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TitleSection;
