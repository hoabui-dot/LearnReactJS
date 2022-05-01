import React from "react";
import { attributes } from "../content/WebsiteTab/WebsiteTab.md";
import WebsiteTabItem from "./WebsiteTabItem";
import styles from "../styles/Home.module.scss";

const WebsiteTab = ({ setClickImg, setValuePopup }) => {
  const {
    WebsiteTabImg1,
    WebsiteTabImg2,
    WebsiteTabImg3,
    WebsiteTabImg4,
    WebsiteTabImg5,
    WebsiteTabImg6,
  } = attributes;

  return (
    <div className={styles.websiteSlideShow}>
      <div className={styles.container}>
        <div className={styles.websiteSlideShow__wrap}>
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={WebsiteTabImg1}
            value='0'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={WebsiteTabImg2}
            value='1'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={WebsiteTabImg3}
            value='2'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={WebsiteTabImg4}
            value='3'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={WebsiteTabImg5}
            value='4'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={WebsiteTabImg6}
            value='5'
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteTab;
