import React from "react";
import "./GetInvolved.css";
import boximg1 from "../assets/boximg1.jpg";
import boximg2 from "../assets/boximg2.jpg";
import boximg3 from "../assets/boximg3.jpg";
import boximg4 from "../assets/boximg4.jpg";
import boximg5 from "../assets/boximg5.jpg";
import boximg6 from "../assets/boximg6.jpg";

const GetInvolved = () => {
  return (
    <>
      <div className="getinvolved">
        <div className="get-img">
          <div className="g-i-content">
            <h1>
              GET <br />
              INVOLVED
            </h1>
            <p>Find ways to connect & give back</p>
          </div>
        </div>
        <div className="getinvolved-content">
          <h1>EXPRESS FROM THE HEART</h1>
          <p>
            Seva means selfless service; one of the key components and aspects
            of bhakti is serving God with
            <br /> love along with serving His children and creation. With this
            principle of seva, we transcend <br />
            differences based on culture, colour, religion, gender, age and even
            species, and live together in love
            <br /> and harmony.
          </p>
          <p>
            In India, and around the globe, there are numerous ways for you to
            offer an expression of your heart <br />
            and to utilise your skills in the service of others within the
            various projects initiated by H.H.
            <br /> Radhanath Swami. Whether it be as a doctor at one of the
            yearly health camps, an ashram resident <br />
            learning and serving at the Bhakti Center in New York, a Bhakti
            Recovery Group leader for those
            <br /> healing from addiction, or a volunteer serving meals to those
            in need. There are many ways to get
            <br /> involved.
          </p>
          <p>
            If you are inspired to serve and wish to find out ways how,
            <br />
            please email office@radhanathswami.com with inquiries.
          </p>
        </div>
        <div className="give-back">
          <div className="giveback-content">
            <h2>GIVE BACK</h2>
            <h1>
              With each project serving many people around <br /> the world,
              your generous contribution has <br /> infinite opportunity to
              create an impact.
            </h1>
            <h1>
              Click on the project below you wish to donate <br />
              to.
            </h1>
          </div>
          <div className="giveback-container">
            <div className="circlebox">
              <div className="box-img">
                <img src={boximg1} />
                <h2>VANI SCHOOL</h2>
                <p>Spiritual wisdom any time, any place</p>
              </div>
              <div className="box-img">
                <img src={boximg2} />
                <h2>GOVARDHAN ECOVILLAGE</h2>
                <p>Spiritual wisdom any time, any place</p>
              </div>
              <div className="box-img">
                <img src={boximg3} />
                <h2>BHAKTIVEDANTA HOSPITAL</h2>
                <p>Spiritual wisdom any time, any place</p>
              </div>
              <div className="box-img">
                <img src={boximg4} />
                <h2>MIDDAY MEALS</h2>
                <p>Spiritual wisdom any time, any place</p>
              </div>
              <div className="box-img">
                <img src={boximg5} />
                <h2>BHAKTI CENTER</h2>
                <p>Spiritual wisdom any time, any place</p>
              </div>
              <div className="box-img">
                <img src={boximg6} />
                <h2>GOPAL'S GARDEN SCHOOL</h2>
                <p>Spiritual wisdom any time, any place</p>
              </div>
            </div>
          </div>
        </div>
        <div className="getinvolved-c-i">
          <div className="g-c-i-content">
            <h2>EXPLORE</h2>
            <h1>THE JOURNEY WITHIN FOUNDATION</h1>
            <p>
              Learn more about the many philanthropic projects initiated by H.H,
              Radhanath Swami.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="g-c-i-img">
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
