import React from "react";
import styles from "../styles/Home.module.scss";

const SkillsItem = ({ data }) => {
  const { language, percent } = data;
  return (
    <li>
      <div className='item'>
        <div className='item__subTitle' data-percent={percent}>
          <p>{language}</p>
          <p className='subTitle__percent'>{percent}%</p>
          <div className='item__percent' style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </li>
  );
};

export default SkillsItem;
