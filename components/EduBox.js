import React, { useState } from "react";
import "./EduBox.scss";

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
      <div className={`${styles.eduBox__item} ${flip}`}>
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
              className={`item__more ${moreClassName}`}
            >
              <i className='fa-solid fa-ellipsis'></i>
            </button>
          </div>
          <div className={styles.item__key}>
            {keywords ? <span>{keywords}</span> : <i className={icon} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default EduBox;
