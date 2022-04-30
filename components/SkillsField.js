import React from "react";
import SkillsItem from "./SkillsItem";
import styles from "../styles/Home.module.scss";

const SkillsField = ({ data }) => {
  const { title, list } = data;
  return (
    <div className={styles.field}>
      <div className={styles.field__title}>
        <p>{title}</p>
      </div>
      <ul className={styles.field__list}>
        {list &&
          !!list &&
          list.map((data, index) => <SkillsItem key={index} data={data} />)}
      </ul>
    </div>
  );
};

export default SkillsField;
