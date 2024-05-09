import React from "react";
import "./Hero.css";
import radhanath from "../assets/radhanath-swami-mumbai.jpg";
import rimg1 from "../assets/rns-young.jpg";
import rimg2 from "../assets/rns-mic.jpg";
import rimg3 from "../assets/rns-vrindavan.jpg";
import simg1 from "../assets/srila-prabhupada-rns.jpg";
import Signupimg from "../assets/notebook-phone.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-container">
          <div className="image">
            <img src="https://radhanathswami.com/wp-content/uploads/2023/09/radhanath-swami-website-hero.webp" />
          </div>
          <div className="heading">
            <h1>
              THE ESSENCE
              <br /> OF SPIRITUALITY
            </h1>
            <div className="para">
              <p>
                For over 50 years, Radhanath Swami, a monk in <br />
                the bhakti tradition, has committed his life to
                <br /> guiding individuals toward deeper purpose and <br />
                driving social initiatives through the <br />
                transformative power of bhakti.
              </p>
            </div>
            <div className="btn">
              <a href="">
               
                <button>DISCOVER THIS JOURNEY</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* -------------section-2------------ */}
      <div className="teacher">
        <div className="t-container">
          <div className="t-watch">
            <h2>WATCH</h2>
            <h3>
              TEACHER
              <br />
              AUTHOR
              <br />
              ACTIVIST
            </h3>
            <p>
              An introduction to His
              <br /> Holiness Radhanath Swami
            </p>
          </div>
          <div className="t-video">
            <img src={radhanath} />
            {/* <a href="https://youtu.be/-6WBqc4nBOs">
              <i class="fa-regular fa-circle-play"></i>
            </a> */}
          </div>
          <div className="t-content">
            <p>
              True wisdom,
              <br />
              True enlightenment…
              <br />
              is to see every living being
              <br />
              with equal vision.
            </p>
            <h3>RADHANATH SWAMI</h3>
          </div>
        </div>
      </div>
      {/* -----------section-3 feature--------------- */}
      <div className="feature">
        <div className="overlay">
          <div className="f-content">
            <h2>Feature</h2>
            <h3>
              Radhanath Swami has initiated projects <br />
              that have served millions of people
            </h3>
            <h4>Here's a snapshot of his philanthropic work</h4>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
      {/* ---------------section-4 radhanath----------  */}
      <div className="r-story">
        <div className="r-container">
          <div className="r-content">
            <h2>About</h2>
            <h3>
              Learn more about Radhanath Swami’s life <br />
              story
            </h3>
            <p>
              From a young boy growing up in Chicago amongst the civil <br />{" "}
              rights movement, to a world-wide leader of spiritual thought.
            </p>
          </div>
          <div className="r-image">
            <img src={rimg1} />
            <img src={rimg2} />
            <img src={rimg3} />
          </div>
          <button>GO ON THE JOURNEY</button>
        </div>
      </div>
      {/* ---------section-5 sarila-------- */}
      <div className="srila">
        <div className="s-container">
          <div className="s-content">
            <h2>FEATURED</h2>
            <h1>
              SRILA PRABHUPADA <br />& BHAKTI YOGA
            </h1>
            <p>
              Discover Radhanath Swami's teacher, Srila
              <br /> Prabhupada, who introduced him to the path of
              <br /> Divine Love known as 'Bhakti Yoga', a practice
              <br /> that has been passed down by saints and sages over <br />
              thousands of years.
            </p>
            <div className="btn">
              <button>SRILA PRUBHUPADA</button>
              <button>BHAKTI YOGA</button>
            </div>
          </div>
          <div className="s-img">
            <img src={simg1} />
          </div>
        </div>
        <div className="s-img2">
          <div className="overlay"></div>
        </div>
      </div>
      {/* ---------section-6 experience--------- */}

      <div className="experience">
        <div className="e-container">
          <div className="e-content">
            <h2>EXPERIENCE</h2>
            <h1>
              His Holiness speaks at events <br />
              all around the world
            </h1>
            <p>Discover upcoming and past events</p>
            <button>FIND HERE</button>
          </div>
        </div>
      </div>

      {/* --------section-7 signup----------- */}

      <div className="signup">
        <div className="sign-img">
          <img src={Signupimg} />
        </div>
        <div className="sign-content">
          <h2>NEWSLETTER</h2>
          <h1>SIGN UP</h1>
          <p>to receive regular updates</p>
          <div className="input">
            <input type="text" placeholder="FIRST NAME*" />
            <input type="text" placeholder="EMAIL" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* -----------section-8 thought--------- */}

      <div className="thought">
        <div className="thought-container">
          <div className="th-content">
            <h2>
              Things can give pleasure to the mind and
              <br /> senses, but only love can give pleasure to the
              <br /> heart. And ultimately, that is what we are
              <br /> looking for.
            </h2>
            <h3>RADHANATH SWAMI</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
