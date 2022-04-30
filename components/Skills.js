import React from "react";
import Field from "./SkillsField";
import TitleSection from "./TitleSection";
import SkillsIcon from "../public/uploads/mixer.png";
import styles from "../styles/Home.module.scss";

const Skills = () => {
  return (
    <section id={styles.skill} className={styles.skills}>
      <div className={styles.container}>
        <TitleSection title='skills' icon={SkillsIcon} />
        <div className={styles.skills__wrap}>
          {skills &&
            !!skills &&
            skills.map((data, index) => <Field key={index} data={data} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
