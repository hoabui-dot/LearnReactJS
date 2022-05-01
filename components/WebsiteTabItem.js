import React from "react";
import styles from "../styles/Home.module.scss";
import { attributes } from "../content/WebsiteTab/WebsiteTab.md";

const WebsiteTabItem = ({ setClickImg, image, setValuePopup, value }) => {
  const { descWebsite } = attributes;

  const handleClick = () => {
    setClickImg(true);
    setValuePopup(Number(value));
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__content}>
        <figure onClick={handleClick} value={value}>
          <img src={image} alt='item Images' />
          <figcaption>
            <div className={styles.item__title}>
              <div className={styles.text__center}>
                <span>single</span>
                <span>page</span>
              </div>
            </div>
            <div className={styles.item__description}>
              <p>showcase your portfolio in details on a single page</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default WebsiteTabItem;
