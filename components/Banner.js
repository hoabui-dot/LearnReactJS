import React, { useState } from "react";
import { Link } from "react-scroll";
import { attributes } from "../content/Card/Card.md";
// import ButtonScrollTop from "../../../../components/ButtonScrollTop/Button";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.scss";
import {
  faMinus,
  faUser,
  faDashboard,
  faGraduationCap,
  faSliders,
  faSuitcase,
  faArchive,
  faHeart,
  faUserGroup,
  faMoneyBill,
  faPencilSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const { thumbnail, background } = attributes;

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleOpenMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section id={styles.banner} className={styles.banner}>
      <nav
        id={styles.theMenu}
        // className={toggleMenu ? "menu menu__open" : "menu"}
        className={`${styles.menu} ${toggleMenu ? styles.menu__open : ""}`}
      >
        <div className={styles.menu__wrap}>
          <div className={styles.logo__flat}>
            <img
              alt='personal logo'
              className={styles.img__responsive}
              src={thumbnail}
              width={225}
              height={225}
            />
          </div>
          <br />
          <Link to='banner' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faUser} className={styles.title__icon} />
            Home
          </Link>
          <Link to='description' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
              icon={faDashboard}
              className={styles.title__icon}
            />
            About
          </Link>
          <Link to='education' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className={styles.title__icon}
            />
            Education
          </Link>
          <Link to='skill' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faSliders} className={styles.title__icon} />
            Skills
          </Link>
          <Link to='experience' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faSuitcase} className={styles.title__icon} />
            Experience
          </Link>
          <Link to='portfolio' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faArchive} className={styles.title__icon} />
            Portfolios
          </Link>
          <Link to='interest' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faHeart} className={styles.title__icon} />
            Interest
          </Link>
          <Link to='testimonial' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
              icon={faUserGroup}
              className={styles.title__icon}
            />
            Testimonials
          </Link>
          <Link to='pricing' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
              icon={faMoneyBill}
              className={styles.title__icon}
            />
            Pricing
          </Link>
          <Link to='blog' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon
              icon={faPencilSquare}
              className={styles.title__icon}
            />
            Blog
          </Link>
          <Link to='contact' spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.title__icon} />
            Contact
          </Link>
        </div>

        <div id={styles.menuToggle} onClick={handleOpenMenu}>
          <div className={styles.toggle__normal}>
            <FontAwesomeIcon
              icon={faMinus}
              className={`${styles.top__bar} ${
                toggleMenu ? styles.top__transform : ""
              }`}
            />
            <FontAwesomeIcon
              icon={faMinus}
              className={`${styles.middle__bar} ${
                toggleMenu ? styles.middle__transform : ""
              }`}
            />
            <FontAwesomeIcon
              icon={faMinus}
              className={`${styles.bottom__bar} ${
                toggleMenu ? styles.bottom__transform : ""
              }`}
            />
          </div>
        </div>
      </nav>
      <div className='header__background'>
        <img src={background} alt='BackGround Image' />
      </div>
      <Card />
      {/* <ButtonScrollTop /> */}
    </section>
  );
};

export default Banner;