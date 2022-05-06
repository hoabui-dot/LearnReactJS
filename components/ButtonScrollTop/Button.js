import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  const [state, setState] = useState(false);
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setState(true);
    } else setState(false);
  }

  return (
    <>
      <Link to='banner' spy={true} smooth={true} offset={0} duration={500}>
        <div className={`${styles.btnScroll} ${state ? styles.active : ""}`}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </Link>
    </>
  );
};

export default Button;
