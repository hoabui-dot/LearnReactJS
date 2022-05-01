import React from "react";
import TitleSection from "./TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { attributes } from "../content/Testimonial/Testimonial.md";
import client1 from "../public/uploads/client-1.png";
import client2 from "../public/uploads/client-2.png";
import client3 from "../public/uploads/client-3.png";
import handShake from "../public/uploads/handshake.png";
import logo1 from "../public/uploads/logo1.png";
import logo2 from "../public/uploads/logo2.png";
import logo3 from "../public/uploads/logo3.png";
import logo4 from "../public/uploads/logo4.png";
import logo5 from "../public/uploads/logo5.png";
import logo6 from "../public/uploads/logo6.png";
import logo7 from "../public/uploads/logo7.png";
import logo8 from "../public/uploads/logo8.png";
import logo9 from "../public/uploads/logo9.png";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/Home.module.scss";

const Testimonials = () => {
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
                    src={client1}
                    alt='Item Image'
                    width={130}
                    height={130}
                  />
                </figure>
                <div className={styles.item__content}>
                  <p>
                    I work with John on several web development projects and I
                    find him to be extremely creative and a technical Front End
                    Developer. Jone expertise involves building complex
                    Responsive Design layouts using HTML 5, CSS3, and
                    JavaScript. I work with John on several web development
                    projects and I find him to be extremely creative and a
                    technical Front End Developer. Jone expertise involves
                    building complex Responsive Design layouts using HTML 5,
                    CSS3, and JavaScript.
                  </p>
                  <p>Mike, CEO, IT World.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.item}>
                <figure className={styles.item__image}>
                  <Image
                    src={client2}
                    alt='Item Image'
                    width={130}
                    height={130}
                  />
                </figure>
                <div className={styles.item__content}>
                  <p>
                    I work with John on several web development projects and I
                    find him to be extremely creative and a technical Front End
                    Developer.
                  </p>
                  <p>Mike, CEO, IT World.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.item}>
                <figure className={styles.item__image}>
                  <Image
                    src={client3}
                    alt='Item Image'
                    width={130}
                    height={130}
                  />
                </figure>
                <div className={styles.item__content}>
                  <p>
                    I work with John on several web development projects and I
                    find him to be extremely creative and a technical Front End
                    Developer. Jone expertise involves building complex
                    Responsive Design layouts using HTML 5, CSS3, and
                    JavaScript.
                  </p>
                  <p>Mike, CEO, IT World.</p>
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
