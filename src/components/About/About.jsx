import slideimg1 from "../assets/radhanath-swami-talk1-768x512.webp";
import slideimg2 from "../assets/radhanath-swami-talk2.webp";
import slideimg3 from "../assets/radhanath-swami-talk3.webp";
import slideimg4 from "../assets/radhanath-swami-talk4.webp";
import slideimg5 from "../assets/radhanath-swami-talk5.webp";
import abt_img from "../assets/radhanath-swami-Chant4Change.jpg";
import gl_img1 from "../assets/gl-img1.jpg";
import gl_img2 from "../assets/gl-img2.jpg";
import gl_img3 from "../assets/gl-img3.jpg";
import gl_img4 from "../assets/gl-img4.jpg";
import gl_img5 from "../assets/gl-img5.jpg";
import obama from "../assets/Radhanath-Swami-Barack-Obama.jpg";
import phimg from "../assets/radhanatha-swami-philanthropist.jpg";
import award from "../assets/award.webp";
import win from "../assets/rename.jpg";
import "./About.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-img1">
            <div className="about-content1">
              <h1>ABOUT</h1>
              <p>
                Radhanath Swami has been a monk in the <br />
                Bhakti tradition for over 50 years. His <br />
                life is dedicated to helping people find
                <br /> meaning through serving others.{" "}
              </p>
            </div>
          </div>
          <div className="about-img2">
            <div className="about-content2">
              <h1>AN EXTRAORDINARY JOURNEY</h1>
              <h2>
                TEACHER.
                <br />
                AUTHOR.
                <br />
                ACTIVIST.
              </h2>
              <p>
                Radhanath Swami is one of the world’s <br />
                most beloved and respected spiritual
                <br /> teachers. He spent his youth travelling
                <br /> the world, experiencing its rich cultures
                <br /> and diversity. As he wandered, he was <br />
                yearning to find meaning and purpose in
                <br /> his life. Since meeting his spiritual
                <br /> teacher in India 50 years ago, Radhanath <br />
                Swami has been on a mission to share the
                <br /> beauty of Bhakti with the world. He is
                <br /> not only a guide but a community <br />
                builder, activist, and a New York Times
                <br /> Bestselling author.
              </p>
              <p>
                Radhanath Swami’s message is as
                <br /> profound as it is simple: by cultivating a <br />
                rich inner life of self-awareness and <br />
                serving others with humility, we can <br />
                become instruments of compassion and <br />
                agents of sustainable change in the <br />
                world.
              </p>
            </div>
          </div>
          <div className="about-img3">
            <div className="about-content3">
              <h2>A VOICE OF INTEGRITY</h2>
              <h1>
                GUIDE FOR THE
                <br /> MODERN AGE
              </h1>
            </div>
          </div>
          <div className="about-img4">
            <div className="about-content4">
              <div className="about-slide">
                <div className="slide">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={slideimg1} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={slideimg2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={slideimg3} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={slideimg4} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={slideimg5} />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="slide-img">
                  <img src={slideimg1} />
                  <img src={slideimg2} />
                  <img src={slideimg3} />
                  <img src={slideimg4} />
                  <img src={slideimg5} />
                </div>
              </div>
            </div>
          </div>
          <div className="about-img5">
            <div className="abt-imgs">
              <img src={abt_img} />
            </div>
          </div>
          <div className="about-img6">
            <div className="about-global">
              <div className="ab-gl-img1">
                <img src={gl_img1} />
              </div>
              <div className="gl-content">
                <h1>A GLOBAL ACTIVIST</h1>
                <p>
                  As an emerging thought-leader of his generation, Radhanath
                  Swami’s
                  <br /> work as a social activist has led him to meet and
                  discuss the message of
                  <br /> compassion with leaders of the world.
                </p>
                <h3>FEATURED:</h3>
                <p>
                  H.H. the Dalai Lama, Prime Minister of India Narendra Modi,
                  Mother <br /> Teresa, Environmental Activist Vandana Shive,
                  Philosopher & Activist Dr
                  <br /> Cornel West, Barack Obama.
                </p>
              </div>
              <div className="ab-gl-img2">
                <img src={gl_img2} />
              </div>
              <div className="ab-gl-img3">
                <img src={gl_img3} />
              </div>
              <div className="ab-gl-img4">
                <img src={gl_img4} />
              </div>
              <div className="ab-gl-img5">
                <img src={gl_img5} />
              </div>
            </div>
          </div>

          <div className="obama">
            <div className="obamaimg">
              <img src={obama} />
              <div className="obama-content">
                <h2>
                  To be a leader means to have <br />
                  humility, to have respect and to
                  <br /> serve the people that we are <br />
                  leading.
                </h2>
                <h1>RADHANATH SWAMI</h1>
              </div>
            </div>
          </div>

          <div className="philanthropist">
            <div className="ph-container">
              <div className="ph-img">
                <img src={phimg} />
              </div>
              <div className="ph-content">
                <h1>
                  A SPIRITUAL
                  <br /> PHILANTHROPIST
                </h1>
                <p>
                  Under his inspiration and guidance, Radhanath
                  <br /> Swami has spearheaded a number of projects that
                  <br /> address fundamental human needs and uplift <br />
                  global consciousness. Each project provides
                  <br /> profound solutions to the challenges our planet
                  <br />
                  faces today.{" "}
                </p>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>

          <div className="award">
            <div className="award-container">
              <div className="award-img">
                <img src={award} />
              </div>
            </div>
          </div>
          <div className="wining">
            <div className="win-container">
              <div className="win-img">
                <img src={win} />
              </div>
              <div className="win-content">
                <h1>
                  AWARD-WINNING <br />
                  AUTHOR
                </h1>
                <p>
                  Radhanath Swami has captured his
                  <br /> journey hitch-hiking across Europe
                  <br /> & Asia to spiritual India in his <br />
                  -selling autobiography, “The
                  <br /> Journey Home.” Many of his key <br />
                  teachings, based within the Bhakti
                  <br /> tradition, are found within his New
                  <br /> York Times best-selling sequel,
                  <br /> “The Journey Within.”
                </p>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
