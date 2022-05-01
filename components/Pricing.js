import React from "react";
import TitleSection from "./TitleSection";
import lightNing from "../public/uploads/lightning.png";
import PricingItem from "./PricingItem";
import styles from "../styles/Home.module.scss";
import { attributes } from "../content/Pricing/Pricing.md";

const Pricing = () => {
  const {} = attributes;

  return (
    <section id={styles.pricing} className={styles.pricing}>
      <div className={styles.container}>
        <TitleSection title='pricing' icon={lightNing} />
        <div className={styles.pricing__wrap}>
          {pricing &&
            !!pricing.length &&
            pricing.map((data, index) => (
              <PricingItem key={index} data={data} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
