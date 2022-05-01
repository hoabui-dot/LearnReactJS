import React, { useState } from "react";
import TitleSection from "./TitleSection";
import WebsiteTab from "./WebsiteTab";
import AllTab from "./AllTab";
import DribbleTab from "./DribbleTab";
import LogoTab from "./LogoTab";
// import Popup from "./Popup";
import PortfolioIcon from "../public/uploads/safe.png";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [btn, setBtn] = useState(false); // set plus button in all slide
  const [filter, setFilter] = useState("ALL");
  const [clickImg, setClickImg] = useState(false); //set click image to open popup image
  const [valuePopup, setValuePopup] = useState(null);

  //Handling click Slide Button
  const handleClick = e => {
    setBtn(false);
    setFilter(e.target.innerText);
  };

  //Handling click Plus Button at all slides
  const handleVisible = () => {
    setBtn(!btn);
  };

  return (
    <section id={styles.portfolio} className={styles.portfolio}>
      <div className={styles.container}>
        <TitleSection title='portfolio' icon={PortfolioIcon} />
        <div className={styles.lightBox}>
          <div className={styles.lightBox__btn}>
            <button
              onClick={handleClick}
              className={`${styles.btn} ${
                filter === "ALL" ? styles.active : ""
              }`}
            >
              ALL
            </button>
            <button
              onClick={handleClick}
              className={`${styles.btn} ${
                filter === "LOGO" ? styles.active : ""
              }`}
            >
              LOGO
            </button>
            <button
              onClick={handleClick}
              className={`${styles.btn} ${
                filter === "DRIBBLE" ? styles.active : ""
              }`}
            >
              DRIBBLE
            </button>
            <button
              onClick={handleClick}
              className={`${styles.btn} ${
                filter === "WEBSITES" ? styles.active : ""
              }`}
            >
              WEBSITES
            </button>
          </div>
          <div className={styles.portfolio__wrap}>
            <div className={styles.lightBox}>
              {filter === "ALL" && btn === false ? (
                <LogoTab
                  setValuePopup={setValuePopup}
                  setClickImg={setClickImg}
                />
              ) : (
                ""
              )}
              {filter === "LOGO" && btn === false ? (
                <LogoTab
                  setValuePopup={setValuePopup}
                  setClickImg={setClickImg}
                />
              ) : (
                ""
              )}
              {filter === "DRIBBLE" && btn === false ? (
                <DribbleTab
                  setValuePopup={setValuePopup}
                  setClickImg={setClickImg}
                />
              ) : (
                ""
              )}
              {filter === "WEBSITES" && btn === false ? (
                <WebsiteTab
                  setValuePopup={setValuePopup}
                  setClickImg={setClickImg}
                />
              ) : (
                ""
              )}
              {btn ? (
                <AllTab
                  setValuePopup={setValuePopup}
                  setClickImg={setClickImg}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          {/* Plus Button at All Slide */}
          {/* <button
            onClick={handleVisible}
            className={
              filter !== "ALL" ? styles.hidden : styles.lightBox__visible
            }
          >
            <FontAwesomeIcon icon={btn ? faAnglesUp : faPlus} />
          </button> */}
        </div>

        {/* <Popup
          setValuePopup={setValuePopup}
          valuePopup={valuePopup}
          clickImg={clickImg}
          setClickImg={setClickImg}
        /> */}
      </div>
    </section>
  );
};

export default Portfolio;
