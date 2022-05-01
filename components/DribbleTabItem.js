import React from "react";
import styles from "../styles/Home.module.scss";

const DribbleTabItem = ({
  value,
  setClickImg,
  image,
  title,
  description,
  setValuePopup,
}) => {
  const handleClick = () => {
    document.body.style.overflow = "hidden";
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
                <span>lightbox</span>
                <span>{title}</span>
              </div>
            </div>
            <div className={styles.item__description}>
              <p>{description}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default DribbleTabItem;
