import React from "react";
import TitleSection from "./TitleSection";
import heart from "../public/uploads/heart.png";
import styles from "../styles/Home.module.scss";
import InterestItem from "./InterestItem";
import {
  faMusic,
  faGamepad,
  faCamera,
  faFutbol,
  faPlane,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

const Interest = () => {
  const interest = [
    {
      name: "music",
      icon: faMusic,
    },
    {
      name: "gaming",
      icon: faGamepad,
    },
    {
      name: "photography",
      icon: faCamera,
    },
    {
      name: "football",
      icon: faFutbol,
    },
    {
      name: "traveling",
      icon: faPlane,
    },
    {
      name: "movies",
      icon: faFilm,
    },
  ];
  function handleBg(value) {
    if ((value + 1) % 2 == 0) return "var(--main-color)";
    return "#fff";
  }
  return (
    <section id={styles.interest} className={styles.interest}>
      <div className={styles.container}>
        <TitleSection title='interest' icon={heart} />
        <div className={styles.interest__wrap}>
          <div className={styles.wrap__content}>
            <p>
              First of all I love music, country music is my favorite. Love
              watching football, movies and playing games with my buddies. I
              spend quite a lot of time in traveling and photography, these
              keeps me fresh for working environment. I also spend time
              volunteering at the Red Cross in London, UK each month.
            </p>
          </div>
          <div className={styles.wrap__enjoy}>
            <div className={styles.enjoy__list}>
              {interest &&
                !!interest &&
                interest.map((data, index) => (
                  <InterestItem
                    bgColor={index % 2 == 0 ? "var(--main-color)" : "#fff"}
                    color={index % 2 == 0 ? "#fff" : "var(--main-color)"}
                    key={index}
                    icon={data.icon}
                    name={data.name}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
