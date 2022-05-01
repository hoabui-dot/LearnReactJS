import React from "react";
import { attributes } from "@fortawesome/free-solid-svg-icons";
import DribbleTabItem from "./DribbleTabItem";
import styles from "../styles/Home.module.scss";

const DribbleTab = ({ setClickImg, setValuePopup }) => {
  const { dribbleTabImg1, dribbleTabImg2, dribbleTabImg3 } = attributes;

  return (
    <div className={styles.dribbleSlide}>
      <div className={styles.container}>
        <div className={styles.dribbleSlide__wrap}>
          <DribbleTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={dribbleTabImg1}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
            value='1'
          />
          <DribbleTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={dribbleTabImg2}
            title='image'
            description='i designed this for a client for his cafe'
            value='4'
          />
          <DribbleTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={dribbleTabImg3}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
            value='5'
          />
        </div>
      </div>
    </div>
  );
};

export default DribbleTab;
