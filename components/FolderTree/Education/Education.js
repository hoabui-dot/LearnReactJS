import React, { useState } from "react";
import TitleSection from "../../TitleSection/TitleSection";
import IconEdu from "../../../public/uploads/book.png";
import FolderTree from "../FolderTree";
import { attributes } from "../../../content/Education/Education.md";
import EducationItem from "./EducationItem/EducationItem";
import styles from "../FolderTree.module.scss";
import {
  faGraduationCap,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";

const Education = () => {
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
    title5,
    description5,
    date5,
    content5,
    title6,
    description6,
    date6,
    content6,
  } = attributes;

  const educationArray = [
    {
      jobName: title1,
      jobSubTitle: description1,
      jobTime: date1,
      jobDesc: content1,
      keywords: "p",
      moreClassName: true,
    },
    {
      jobName: title2,
      jobSubTitle: description2,
      jobTime: date2,
      jobDesc: content2,
      keywords: "g",
      flip: true,
    },
    {
      jobName: title3,
      jobSubTitle: description3,
      jobTime: date3,
      jobDesc: content3,
      keywords: "c",
    },
    {
      jobName: title4,
      jobSubTitle: description4,
      jobTime: date4,
      jobDesc: content4,
      icon: faGraduationCap,
      flip: true,
    },
    {
      jobName: title5,
      jobSubTitle: description5,
      jobTime: date5,
      jobDesc: content5,
      keywords: "u",
      moreClassName: true,
    },
    {
      jobName: title6,
      jobSubTitle: description6,
      jobTime: date6,
      jobDesc: content6,
      icon: faEarthAmerica,
      flip: true,
      moreClassName: true,
    },
  ];

  const [state, setState] = useState(false);
  return (
    <section id={styles.education} className={styles.education}>
      <div className={styles.container}>
        <TitleSection title='education' icon={IconEdu} />
        <FolderTree
          setState={setState}
          dataFolderTree={educationArray}
          tree='edu'
        />
        <EducationItem state={state} setState={setState} />
      </div>
    </section>
  );
};

export default Education;
