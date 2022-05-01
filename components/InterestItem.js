import React from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Enjoy = ({ icon, name, bgColor, color }) => {
  return (
    <div
      style={{ background: bgColor, color: color }}
      className={styles.enjoy__item}
    >
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </div>
  );
};

export default Enjoy;
