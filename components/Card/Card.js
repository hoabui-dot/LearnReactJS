import React from "react";
import { attributes } from "../../content/Card/Card.md";
import Image from "next/image";
import styles from "./Card.module.scss";

const Card = () => {
  let { thumbnail } = attributes;

  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <div
          className={`${styles.card__wrap} ${styles.box__shadow} ${styles.animated}`}
        >
          <div className={styles.card__content}>
            <div className={styles.card__name}>
              <h4>bui van hoa</h4>
              <h6>Software Engineer & UI/UX Expert</h6>
            </div>
            <div className={styles.card__infos}>
              <ul className={styles.infos__list}>
                <li>
                  <i className='fa-solid fa-envelope'></i>
                  <span>ongchunhostu1998@gmail.com</span>
                </li>
                <li>
                  <i className='fa-solid fa-envelope'></i>
                  <span>yourpersonalwsebsite.com</span>
                </li>
                <li>
                  <i className='fa-brands fa-skype'></i>
                  <span>
                    <a href='https://join.skype.com/invite/xZFCGR1NBK20'>
                      join.skype.com
                    </a>
                  </span>
                </li>
                <li>
                  <i className='fa-brands fa-skype'></i>
                  <span>+84 373 887 052</span>
                </li>
                <li>
                  <i className='fa-brands fa-skype'></i>
                  <span>D1 Street, 2 District, HCM</span>
                </li>
              </ul>
            </div>
            <div className={styles.card__icon}>
              <a
                href='https://www.facebook.com/profile.php?id=100015533373382'
                className={styles.icon__fb}
              >
                <i className='fa-brands fa-facebook-f'></i>
              </a>
              <a
                href='https://twitter.com/hoabui1907'
                className={styles.icon__tw}
              >
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a
                href='https://contacts.google.com/?hl=vi'
                className={styles.icon__gg}
              >
                <i className='fa-brands fa-google-plus-g'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/h%C3%B3a-b%C3%B9i-080768234/'
                className={styles.icon__in}
              >
                <i className='fa-brands fa-linkedin-in'></i>
              </a>
              <a className={styles.icon__wf}>
                <i className='fa-solid fa-wifi'></i>
              </a>
            </div>
          </div>
          <div className={styles.triangle}></div>
          <button className={styles.btn__plus}>
            <i className='fa-solid fa-plus'></i>
          </button>
          <figure className={styles.avatar}>
            <Image src={thumbnail} alt='Avatar' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Card;
