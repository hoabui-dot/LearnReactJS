import React from "react";
import { attributes } from "../../../../content/AllTab/AllTab.md";

import LogoTabItem from "../LogoTab/LogoTabItem";
import DribbleTabItem from "../DribbleTab/DribbleTabItem";
import WebsiteTabItem from "../WebsiteTab/WebsiteTabItem";
import styles from "./AllTab.module.scss";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const AllTab = ({ setClickImg, setImage }) => {
  const {
    allTabImg1,
    allTabImg2,
    allTabImg3,
    allTabImg4,
    allTabImg5,
    allTabImg6,
    allTabImg7,
    allTabImg8,
    allTabImg9,
    allTabImg10,
    allTabImg11,
    allTabImg12,
  } = attributes;

  return (
    <div className={styles.allTab}>
      <div className={styles.container}>
        <div className={styles.allTab__wrap}>
          <LogoTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg1}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <LogoTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg2}
            title='video'
            description='i designed this for a client for his cafe'
            icon={faPlayCircle}
          />
          <LogoTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg3}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <DribbleTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg4}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <DribbleTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg5}
            title='video'
            description='i designed this for a client for his cafe'
            icon={faPlayCircle}
          />
          <DribbleTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg6}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <WebsiteTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg7}
          />
          <WebsiteTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg8}
          />
          <WebsiteTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg9}
          />
          <WebsiteTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg10}
          />
          <WebsiteTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg11}
          />
          <WebsiteTabItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={allTabImg12}
          />
        </div>
      </div>
    </div>
  );
};

export default AllTab;
