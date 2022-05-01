import React, { useState } from "react";
import TitleSection from "./TitleSection";
import ExpIcon from "../public/uploads/layers.png";
import FolderTree from "./FolderTree";
// import MoreInfoExp from "./MoreInfoExp/MoreInfoExp";
import { attributes } from "../content/Experience/Experience.md";
import styles from "../styles/Home.module.scss";

const Experience = () => {
  const {
    title1,
    description1,
    date1,
    content1,
    title2,
    description2,
    date2,
    content2,
    title3,
    description3,
    date3,
    content3,
    title4,
    description4,
    date4,
    content4,
  } = attributes;

  const experienceArray = [
    {
      jobName: title1,
      jobSubTitle: description1,
      jobTime: date1,
      jobDesc: content1,
      keywords: "d",
      moreClassName: true,
    },
    {
      jobName: title2,
      jobSubTitle: description2,
      jobTime: date2,
      jobDesc: content2,
      keywords: "f",
      flip: true,
    },
    {
      jobName: title3,
      jobSubTitle: description3,
      jobTime: date3,
      jobDesc: content3,
      keywords: "u",
    },
    {
      jobName: title4,
      jobSubTitle: description4,
      jobTime: date4,
      jobDesc: content4,
      keywords: "s",
      flip: true,
      moreClassName: true,
    },
  ];

  const [state, setState] = useState(false);

  return (
    <section id={styles.experience} className={styles.experience}>
      <div className={styles.container}>
        <TitleSection title='experience' icon={ExpIcon} />
        <FolderTree
          setState={setState}
          dataFolderTree={experienceArray}
          tree='exp'
        />
        {/* <MoreInfoExp state={state} setState={setState} /> */}
      </div>
    </section>
  );
};

export default Experience;
