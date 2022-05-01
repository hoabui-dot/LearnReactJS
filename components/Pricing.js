import React from "react";
import TitleSection from "./TitleSection";
import lightNing from "../public/uploads/lightning.png";
import PricingItem from "./PricingItem";
import styles from "../styles/Home.module.scss";
import { attributes } from "../content/Pricing/Pricing.md";

const Pricing = () => {
  const {
    price1,
    level1,
    brandWidth1,
    diskSpace1,
    databases1,
    domain1,
    subdomain1,
    price2,
    level2,
    brandWidth2,
    diskSpace2,
    databases2,
    domain2,
    subdomain2,
    price3,
    level3,
    brandWidth3,
    diskSpace3,
    databases3,
    domain3,
    subdomain3,
  } = attributes;

  const pricing = [
    {
      price: price1,
      level: level1,
      brandWidth: brandWidth1,
      diskSpace: diskSpace1,
      databases: databases1,
      domain: domain1,
      subdomain: subdomain1,
    },
    {
      price: price2,
      level: level2,
      brandWidth: brandWidth2,
      diskSpace: diskSpace2,
      databases: databases2,
      domain: domain2,
      subdomain: subdomain2,
    },
    {
      price: price3,
      level: level3,
      brandWidth: brandWidth3,
      diskSpace: diskSpace3,
      databases: databases3,
      domain: domain3,
      subdomain: subdomain3,
    },
  ];

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
