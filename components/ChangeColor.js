import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const ColorPalate = ({ setIsColor }) => {
  const [toggleColor, setToggleColor] = useState(false);

  const handleOpen = () => {
    setToggleColor(!toggleColor);
    console.log("hello");
  };

  const handleChangeColor = e => {
    setIsColor(e.target.id);
  };

  return (
    <div
      id={styles.color__palate}
      className={`${styles.popOut} ${toggleColor ? styles.popOut__open : ""}`}
    >
      <div
        id={styles.icon__toggle}
        onClick={handleOpen}
        className={`${styles.toggle} ${styles.text__center}`}
      >
        <FontAwesomeIcon className={styles.toggle__icon} icon={faGear} />
      </div>
      <div className={`${styles.colors} ${styles.text__center}`}>
        <p className={styles.text__center}>Pick a Color</p>
        <ul>
          <li
            onClick={handleChangeColor}
            id={styles.blue}
            className={styles.color1}
          ></li>
          <li
            onClick={handleChangeColor}
            id={styles.teal}
            className={styles.color2}
          ></li>
          <li
            onClick={handleChangeColor}
            id={styles.gray}
            className={styles.color3}
          ></li>
          <li
            onClick={handleChangeColor}
            id={styles.green}
            className={styles.color4}
          ></li>
          <li
            onClick={handleChangeColor}
            id={styles.purple}
            className={styles.color5}
          ></li>
          <li
            onClick={handleChangeColor}
            id={styles.brown}
            className={styles.color6}
          ></li>
          <li
            onClick={handleChangeColor}
            id={styles.red}
            className={styles.color7}
          ></li>
          <li
            onClick={handleChangeColor}
            id={styles.pink}
            className={styles.color8}
          ></li>
        </ul>
        <p className={styles.text__center}>Blend &amp; Dark</p>
        <ul>
          <li id={styles.blue__blend} className={styles.color1}></li>
          <li id={styles.green__blend} className={styles.color4}></li>
          <li
            onClick={handleChangeColor}
            id={styles.white}
            className={styles.color10}
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default ColorPalate;
