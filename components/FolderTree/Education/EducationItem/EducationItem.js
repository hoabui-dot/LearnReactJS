import React from "react";
import styles from "./EducationItem.module.scss";
import { attributes } from "../../../../content/MoreInfo/MoreInfo.md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const MoreInfo = ({ setState, state }) => {
  const { infoImg, desc } = attributes;

  const handleClick = e => {
    if (e.target.id === "id01") {
      document.body.style.overflow = "unset";
      setState(false);
    }
  };
  //Hoabui
  const handleCloseClick = () => {
    document.body.style.overflow = "unset";
    setState(false);
  };

  return (
    <div
      onClick={handleClick}
      id='id01'
      className={`${styles.modal} ${state ? styles.active : ""}`}
    >
      <div className={styles.modal__content}>
        <div className={styles.more__content}>
          <div onClick={handleCloseClick} className={styles.more__close}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <h4 className={styles.more__title}>graduation at ashton uni</h4>
          <p className={styles.more__time}>Jan 2014 - Mar 2015</p>
          <figure>
            <img src={infoImg} alt='More Info Image' />
          </figure>
          <p className={styles.more__description}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
