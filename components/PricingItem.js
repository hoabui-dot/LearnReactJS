import React from "react";

const PricingItem = ({ data }) => {
  const { price, level, brandWidth, diskSpace, databases, domain, subdomain } =
    data;
  return (
    <div className='animated pricing__item'>
      <div className='item__top'>
        <div className='price'>
          <p className='price__text'>
            <span>$</span>
            <span>{price}</span>
            <span>/mo</span>
          </p>
        </div>
        <div className='level'>
          <span>{level}</span>
        </div>
      </div>
      <div className='item__bottom'>
        <div className='item__benefit'>
          <div className='benefit__bw'>
            <span>{brandWidth}</span>
            <span> Brandwidth</span>
          </div>
          <div className='benefit__ds'>
            <span>{diskSpace}</span>
            <span> Disk Space</span>
          </div>
          <div className='benefit__database'>
            <span>{databases}</span>
            <span> Databases</span>
          </div>
          <div className='benefit__domain'>
            <span>{domain}</span>
            <span> Domain</span>
          </div>
          <div className='benefit__subdomain'>
            <span>{subdomain}</span>
            <span> Subdomain</span>
          </div>
        </div>
        <div className='item__button'>
          <button type='button'>purchases</button>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
