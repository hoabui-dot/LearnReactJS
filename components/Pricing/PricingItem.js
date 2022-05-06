import React from "react";
import styles from "./Pricing.module.scss";

const PricingItem = ({ data }) => {
  const { price, level, brandWidth, diskSpace, databases, domain, subdomain } =
    data;
  return (
    <div className={styles.pricing__item}>
      <div className={styles.item__top}>
        <div className={styles.price}>
          <p className={styles.price__text}>
            <span>$</span>
            <span>{price}</span>
            <span>/mo</span>
          </p>
        </div>
        <div className={styles.level}>
          <span>{level}</span>
        </div>
      </div>
      <div className={styles.item__bottom}>
        <div className={styles.item__benefit}>
          <div className={styles.benefit__bw}>
            <span>{brandWidth}</span>
            <span> Brandwidth</span>
          </div>
          <div className={styles.benefit__ds}>
            <span>{diskSpace}</span>
            <span> Disk Space</span>
          </div>
          <div className={styles.benefit__database}>
            <span>{databases}</span>
            <span> Databases</span>
          </div>
          <div className={styles.benefit__domain}>
            <span>{domain}</span>
            <span> Domain</span>
          </div>
          <div className={styles.benefit__subdomain}>
            <span>{subdomain}</span>
            <span> Subdomain</span>
          </div>
        </div>
        <div className={styles.item__button}>
          <button type='button'>purchases</button>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
