import React from "react";
import TitleSection from "./TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { attributes } from "../content/Testimonial/Testimonial.md";
import handShake from "../public/uploads/handshake.png";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/Home.module.scss";

const Testimonials = () => {
  const {
    avatar1,
    description1,
    author1,
    avatar2,
    description2,
    author2,
    avatar3,
    description3,
    author3,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  } = attributes;

  return (
    <section id={styles.testimonial} className={styles.testimonial}>
      <div className={styles.container}>
        <TitleSection title='testimonials' icon={handShake} />
        <div className={styles.testimonial__wrap}>
          <Swiper
            autoHeight={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            speed={1000}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className={styles.item}>
                <figure className={styles.item__image}>
                  <Image
                    src={avatar1}
                    alt='Item Image'
                    width={130}
                    height={130}
                  />
                </figure>
                <div className={styles.item__content}>
                  <p>{description1}</p>
                  <p>{author1}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.item}>
                <figure className={styles.item__image}>
                  <Image
                    src={avatar2}
                    alt='Item Image'
                    width={130}
                    height={130}
                  />
                </figure>
                <div className={styles.item__content}>
                  <p>{description2}</p>
                  <p>{author2}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.item}>
                <figure className={styles.item__image}>
                  <Image
                    src={avatar3}
                    alt='Item Image'
                    width={130}
                    height={130}
                  />
                </figure>
                <div className={styles.item__content}>
                  <p>{description3}</p>
                  <p>{author3}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.testimonial__logo}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={7}
            loop={true}
            speed={2000}
            simulateTouch={false}
            autoplay={{ delay: 2000, enabled: true }}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 3,
              },
              540: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              993: {
                slidesPerView: 7,
              },
            }}
          >
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo1}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo2}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo3}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo4}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo5}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo6}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo7}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo8}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className={styles.slide}>
                <Image
                  src={logo9}
                  alt='Logo Item Image'
                  width={110}
                  height={60}
                />
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
