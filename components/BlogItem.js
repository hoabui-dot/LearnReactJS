import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faComment } from "@fortawesome/free-solid-svg-icons";

const BlogItem = ({ data, flip }) => {
  const { image, fieldWork, jobName, work, workTitle, workDescription } = data;
  return (
    <div className={`${styles.blog__item} ${flip}`}>
      <div className={styles.item__image}>
        <figure>
          <div className='image__blog'>
            <figure>
              <Image src={image} alt='Blog Images' layout='fill' />
            </figure>
          </div>
          <div className={styles.image__infos}>
            <div className={styles.user}>
              <FontAwesomeIcon icon={faUser} />
              John Doe
            </div>
            <div className={styles.time}>
              <FontAwesomeIcon icon={faClock} />
              August 7, 2020
            </div>
            <div className={styles.talk}>
              <FontAwesomeIcon icon={faComment} />
              168
            </div>
          </div>
        </figure>
      </div>
      <div className={styles.item__content}>
        <div className={styles.job}>
          <p>
            <a className={styles.job__field} href='#'>
              {fieldWork}
            </a>
            <a className={styles.job__name} href='#'>
              {jobName}
            </a>
            <span className={styles.job__working}>{work}</span>
          </p>
        </div>
        <div className={styles.description}>
          <p>{workTitle}</p>
          <p>{workDescription}</p>
        </div>
        <div className={styles.readMore}>
          <a href='#'>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
