import React from "react";
import "./Teaching.css";
import timg from "../assets/teach-4.jpeg";
import timg1 from "../assets/teaching-1.jpg";
import timg2 from "../assets/teaching-2.webp";
import timg3 from "../assets/teaching-3.webp";
import timg4 from "../assets/teaching-4.jpg";
import timg5 from "../assets/teaching-5.webp";

const Teaching = () => {
  return (
    <>
      <div className="teaching">
        <div className="teaching-container-1">
          <h1>Teachings</h1>
          <p>Timeless wisdom for modern times</p>
        </div>

        {/* -----container-2--------- */}
        <div className="teaching-container-2">
          <div className="teaching-con-box-1">
            <img src={timg} />
            <h1>INTRODUCTION TO RADHANATH SWAMI'S TEACHINGS</h1>
            <p>
              The following is a collection of resources that act as an intimate{" "}
              <br />
              introduction to His Holiness Radhanath Swami and get to the heart
              of his <br />
              teachings.
            </p>
          </div>
          <div className="teaching-con-box-2">
            <div className="teaching-c-i-box-1">
              <img src={timg1} />
              <h1>SRILA PRABHUPADA</h1>
              <p>Radhanath Swami’s teacher</p>
            </div>
            <div className="teaching-c-i-box-2 ">
              <img src={timg4} />
              <h1>BHAKTI YOGA</h1>
              <p>The Yoga of Divine Love</p>
            </div>
          </div>
          <div className=" teaching-con-box-1">
            <img src={timg5} />
            <h1>WHY RELATIONSHIPS FAIL</h1>
            <p>
              My friend who is a marriage counselor shared with me a story which
              <br />
              gives us insight into this subject. A couple came to her in tears.
              They had <br /> been arguing for weeks…
            </p>
          </div>
          <div className="teaching-con-box-4">
            <div className="teaching-c-i-box-3">
              <img src={timg3} />
              <h1>THE POWER OF CHOICES</h1>
              <p>
                Eleanor Roosevelt famously said, “I <br /> am who I am today,
                because of the <br />
                choices I made yesterday.” <br /> You may choose to get on an{" "}
                <br />
                airplane to London, but once the <br /> plane takes off, you can
                no longer <br /> choose a different destination; <br />
                you’ll have to get off in London…
              </p>
            </div>
            <div className="teaching-c-i-box-4  ">
              <img src={timg2} />
              <h1>THE POWER OF HABITS</h1>
              <p>
                We all know that diabetes can <br /> cause death. And that
                cigarettes can <br />
                reduce our life expectancy. But <br />
                what most of us do not know, is <br /> that loneliness can have
                a similar <br /> affect on our health…
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaching;
