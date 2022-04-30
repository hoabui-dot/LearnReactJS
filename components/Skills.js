import React from "react";
import Field from "./SkillsField";
import TitleSection from "./TitleSection";
import SkillsIcon from "../public/uploads/mixer.png";
import styles from "../styles/Home.module.scss";
import { attributes } from "../content/Skills/Skills.md";

const Skills = () => {
  const {
    professional,
    pro1,
    pro2,
    pro3,
    pro4,
    proPercent1,
    proPercent2,
    proPercent3,
    proPercent4,
    personal,
    per1,
    per2,
    per3,
    per4,
    perPercent1,
    perPercent2,
    perPercent3,
    perPercent4,
    software,
    sof1,
    sof2,
    sof3,
    sof4,
    sofPercent1,
    sofPercent2,
    sofPercent3,
    sofPercent4,
  } = attributes;

  const skills = [
    {
      title: professional,
      list: [
        { language: pro1, percent: proPercent1 },
        { language: pro2, percent: proPercent2 },
        { language: pro3, percent: proPercent3 },
        { language: pro4, percent: proPercent4 },
      ],
    },
    {
      title: personal,
      title: [
        { language: per1, percent: perPercent1 },
        { language: per2, percent: perPercent2 },
        { language: per3, percent: perPercent3 },
        { language: per4, percent: perPercent4 },
      ],
    },
    {
      title: software,
      title: [
        { language: sof1, percent: sofPercent1 },
        { language: sof2, percent: sofPercent2 },
        { language: sof3, percent: sofPercent3 },
        { language: sof4, percent: sofPercent4 },
      ],
    },
  ];

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
