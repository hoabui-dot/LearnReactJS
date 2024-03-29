import React from 'react';
// import { attributes } from '../../content/Home.md';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGlobe,
  faS,
  faPhone,
  faLocationDot,
  faPlus,
  faF,
  faDove,
  faG,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  // const { card } = attributes;

  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <div className={styles.card__wrap}>
          <div className={styles.card__content}>
            <div className={styles.card__name}>
              <h4>BUI VAN HOA</h4>
              <h6>FRONT-END DEVELOPER</h6>
            </div>
            <div className={styles.card__infos}>
              <div className={styles.infos__list}>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>ongchunhostu1998@gmail.com</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>yourpersonalwsebsite.com</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faS} />
                    <span>
                      <a href='https://join.skype.com/invite/xZFCGR1NBK20'>
                        join.skype.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+84 373 887 052</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>D1 Street, 2 District, HCM</span>
                  </li>
                </ul>
              </div>
              <div className={styles.card__icon}>
                <a
                  href='https://www.facebook.com/profile.php?id=100015533373382'
                  className={styles.icon__fb}
                >
                  f
                </a>
                <a
                  href='https://twitter.com/hoabui1907'
                  className={styles.icon__tw}
                >
                  <FontAwesomeIcon icon={faDove} />
                </a>
                <a
                  href='https://contacts.google.com/?hl=vi'
                  className={styles.icon__gg}
                >
                  <FontAwesomeIcon icon={faG} />
                </a>
                <a
                  href='https://www.linkedin.com/in/h%C3%B3a-b%C3%B9i-080768234/'
                  className={styles.icon__in}
                >
                  in
                </a>
                <a className={styles.icon__wf}>
                  <FontAwesomeIcon icon={faWifi} />
                </a>
              </div>
            </div>
            <div className={styles.triangle}></div>
            <button className={styles.btn__plus}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <figure className={styles.avatar}>
              <img src='/uploads/avtPortfolio.png' alt='Avatar' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
