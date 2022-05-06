import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "../Education/EducationItem/EducationItem.module.scss";

const MoreInfoExp = ({ setState, state }) => {
  const handleCloseClick = e => {
    if (e.target.id === "id01") {
      document.body.style.overflow = "unset";
      setState(false);
    }
  };
  const handleCloseButton = () => {
    document.body.style.overflow = "unset";
    setState(false);
  };
  return (
    <div
      onClick={handleCloseClick}
      id='id01'
      className={`${styles.modal} ${state ? styles.active : ""}`}
    >
      <div className={styles.modal__content}>
        <div className={styles.more__content}>
          <div onClick={handleCloseButton} className={styles.more__close}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <h4 className={styles.more__title}>EXPERIENCE AT Z</h4>
          <p className={styles.more__time}>Jan 2014 - Mar 2015</p>
          <p className={styles.more__description}>
            I have learned a great many things from participating in varsity
            football. It has changed my entire outlook on and attitude toward
            life. Before my freshman year at [high-school], I was shy, had low
            self-esteem and turned away from seemingly impossible challenges.
            Football has altered all of these qualities. On the first day of
            freshman practice, the team warmed up with a game of touch football.
            The players were split up and the game began. However,
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoExp;
