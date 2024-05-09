import React from "react";
import imga from "../assets/rns-journeyhomesingle.jpg";
import imgb from "../assets/rns-journeywithinsingle.jpg";
import "./Books.css";

const Books = () => {
  return (
    <>
      <div className="books">
        <div className="book-container1">
          <div className="book-c1-content">
            <h1>BOOKS</h1>
            <p>
              Radhanath Swami is a #1 New York
              <br />
              Times Best-selling Author of The
              <br /> Journey Home & The Journey Wihin
            </p>
          </div>
          <div className="book-c1-img">
            <img src={imga} />
            <img src={imgb} />
          </div>
        </div>
        <div className="book-container2">
          <p>
            Whenever I look back to that day, I am reminded how
            <br /> prayers may be answered in ways we never expect. To
            <br /> grow may require that we be shaken right to our core.
            <br /> While kneeling on that roadside in Herat, something
            <br /> died within me, giving birth to a realization necessary
            <br /> for me to move forward in my path. With each step, a<br />{" "}
            camel lifts its hoof from a stable place on earth in order
            <br /> to move forward. And to reach the sea, each ripple of <br />
            the river must let go of its present state to surrender to <br />
            the current.
          </p>
          <h2>RADHANATH SWAMI | THE JOURNEY HOME</h2>
        </div>
        <div className="book-container3">
          <div className="bk-cont-img">
            <img src={imga} />
          </div>
          <div className="bk3-content">
            <h3>THE JOURNEY HOME</h3>
            <p>
              Within this extraordinary memoir, Radhanath Swami weaves a
              colorful tapestry of
              <br /> adventure, mysticism, and love. Readers follow Richard
              Slavin from the suburbs of <br />
              Chicago to the caves of the Himalayas as he transforms from young
              seeker to
              <br /> renowned spiritual guide.
            </p>
            <p>
              The Journey Home is an intimate account of the steps to self
              awareness and a<br /> penetrating glimpse into the heart of mystic
              traditions and the challenges that all
              <br /> souls must face on the road to inner harmony and a union
              with the Divine.
            </p>
            <p>
              Through near-death encounters, apprenticeships with advanced
              yogis, and years of
              <br /> travel along the pilgrim’s path, Radhanath Swami eventually
              reaches the inner
              <br /> sanctum of India’s mystic culture and finds the love he has
              been seeking. It is a tale
              <br /> told with rare candor, immersing the reader in a journey
              that is at once engaging,
              <br /> humorous, and heartwarming.
            </p>
            <button>AMAZON</button>
            <button>BARNES & NOBLES</button>
            <button>GOOGLE BOOKS</button>
          </div>
        </div>
        <div className="book-container3">
          <div className="bk-cont-img">
            <img src={imgb} />
          </div>
          <div className="bk3-content">
            <h3>THE JOURNEY HOME</h3>
            <p>
              Within this extraordinary memoir, Radhanath Swami weaves a
              colorful tapestry of
              <br /> adventure, mysticism, and love. Readers follow Richard
              Slavin from the suburbs of <br />
              Chicago to the caves of the Himalayas as he transforms from young
              seeker to
              <br /> renowned spiritual guide.
            </p>
            <p>
              The Journey Home is an intimate account of the steps to self
              awareness and a<br /> penetrating glimpse into the heart of mystic
              traditions and the challenges that all
              <br /> souls must face on the road to inner harmony and a union
              with the Divine.
            </p>
            <p>
              Through near-death encounters, apprenticeships with advanced
              yogis, and years of
              <br /> travel along the pilgrim’s path, Radhanath Swami eventually
              reaches the inner
              <br /> sanctum of India’s mystic culture and finds the love he has
              been seeking. It is a tale
              <br /> told with rare candor, immersing the reader in a journey
              that is at once engaging,
              <br /> humorous, and heartwarming.
            </p>
            <button>AMAZON</button>
            <button>BARNES & NOBLES</button>
            <button>GOOGLE BOOKS</button>
          </div>
        </div>
        <div className="book-container4"></div>
      </div>
    </>
  );
};

export default Books;
