import React from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoSlideShowItem = ({
  setValuePopup,
  setClickImg,
  image,
  title,
  description,
  icon,
  // video,
  value,
}) => {
  const handleClick = () => {
    document.body.style.overflow = "hidden";
    setClickImg(true);
    setValuePopup(Number(value));
  };

  return (
    <>
      <div className={styles.item__content}>
        <figure onClick={handleClick} value={value}>
          <img src={image} alt='item Images' />
          <figcaption>
            <div className={styles.item__title}>
              <div className={styles.text__center}>
                <p className={styles.text__icon}>
                  {icon && <FontAwesomeIcon icon={icon} />}
                </p>
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
    </>
  );
};

export default LogoSlideShowItem;
