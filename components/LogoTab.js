import React from "react";
// import video from "../assets/videos/portfolioVideo.mp4";
import { attributes } from "../content/LogoTab/LogoTab.md";
import LogoTabItem from "./LogoTabItem";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.scss";

const LogoSlideShow = ({ setClickImg, setValuePopup }) => {
  const { logoTabImg1, logoTabImg2, logoTabImg3 } = attributes;

  return (
    <div className={styles.logoSlide}>
      <div className={styles.container}>
        <div className={styles.logoSlide__wrap}>
          <div className={styles.item}>
            <LogoTabItem
              setValuePopup={setValuePopup}
              setClickImg={setClickImg}
              image={logoTabImg1}
              title='image'
              description='two hover effect for portfolio grid blocks. its scale'
              value='0'
            />
          </div>
          <div className={styles.item}>
            <LogoTabItem
              setValuePopup={setValuePopup}
              setClickImg={setClickImg}
              image={logoTabImg2}
              title='video'
              description='i designed this for a client for his cafe'
              icon={faPlayCircle}
              // video={video}
              value='2'
            />
          </div>
          <div className={styles.item}>
            <LogoTabItem
              setValuePopup={setValuePopup}
              setClickImg={setClickImg}
              image={logoTabImg3}
              title='image'
              description='two hover effect for portfolio grid blocks. its scale'
              value='3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlideShow;
