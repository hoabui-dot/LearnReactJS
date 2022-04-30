import React from "react";
import styles from "../styles/Home.module.scss";

const SkillsItem = ({ data }) => {
  const { language, percent } = data;
  return (
    <li>
      <div className={styles.item}>
        <div className={styles.item__subTitle} data-percent={percent}>
          <p>{language}</p>
          <p className={styles.subTitle__percent}>{percent}%</p>
          <div
            className={styles.item__percent}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </li>
  );
};

export default SkillsItem;
