import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const SetHeight = React.createContext();

const EduBox = ({ eduData, flip, setState }) => {
  const {
    jobName,
    jobSubTitle,
    jobTime,
    jobDesc,
    keywords,
    icon,
    moreClassName,
  } = eduData;

  const handleShowModal = () => {
    document.body.style.overflow = "hidden";
    setState(true);
  };
  return (
    <>
      <div
        className={`${styles.eduBox__item} ${flip ? styles.eduBox__flip : ""}`}
      >
        <div className={styles.item__content}>
          <div className={styles.eduBox__job}>
            <p className={styles.job__name}>{jobName}</p>
            <p className={styles.job__subTitle}>{jobSubTitle}</p>
            <p className={styles.job__time}>{jobTime}</p>
            <p className={styles.job__desc}>{jobDesc}</p>
            <button
              value='true'
              type='button'
              onClick={handleShowModal}
              className={`${styles.item__more} ${
                moreClassName ? styles.block : ""
              }`}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div className={styles.item__key}>
            {keywords ? (
              <span>{keywords}</span>
            ) : (
              <FontAwesomeIcon className={styles.icon} icon={icon} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EduBox;
