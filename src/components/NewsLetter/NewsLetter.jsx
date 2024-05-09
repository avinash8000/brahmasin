import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="wisdom">
        <div className="wisdom-img">
          <div className="content">
            <h1>
              WISDOM
              <br /> NEWSLETTERS
            </h1>
            <p>Direct updates and a pocket of knowledge</p>
          </div>
        </div>
        <div className="w-content">
          <h1>WHAT TO EXPECT</h1>
          <div className="w-cont">
            <p>By subscribing to the weekly newsletters, you will receive:</p>
            <div className="w-1">
              <i class="fa-solid fa-circle-1"></i>
              <p>Pockets of wisdom from the teachings by Radhanath Swami.</p>
            </div>
            <div className="w-2">
              <i class="fa-solid fa-circle-2"></i>
              <p>Details on public events and travels across the globe.</p>
            </div>
            <div className="w-3">
              <i class="fa-solid fa-circle-3"></i>
              <p>
                Updates on projects and initiatives headed and supported by
                Radhanath Swami worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="w-content2">
          <p>SUBSCRIBE</p>
          <h2>Receive updates straight to your inbox</h2>
          <div className="input-tag">
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="checkbox2">
            <input type="checkbox" />
            <p>
              Yes, I would like the Office of H.H. Radhanath Swami to send{" "}
              <br />
              me emails about its activities. You can unsubscribe at any time.
            </p>
          </div>
          <button>SUBSCRIBE</button>
        </div>
        <div className="nf-img"></div>
      </div>
    </>
  );
};

export default NewsLetter;
