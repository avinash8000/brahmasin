import React from "react";
import rimg from "../assets/yoga-girl.jpg";
import rimg2 from "../assets/rec-image-1.jpeg";
import rimg3 from "../assets/yog.jpeg";
import "./RecoveryAnnex.css";
const RecoveryAnnex = () => {
  return (
    <>
      <div className="recovery-annex">
        <div className="recovery-container-1">
          <h1>
            THE
            <br />
            RECOVERY
            <br /> ANNEX
          </h1>
          <p>
            Healing and Transformation for anyone <br />
            struggling with Addictions of all kinds
          </p>
        </div>

        {/* --------container-2----------- */}
        <div className="recovery-container-2">
          <div className="con-2-heading">
            <h1>BHAKTI-INSPIRED RECOVERY</h1>
            <p>
              The Recovery Annex is a compassion-driven program that blends the
              <br />
              time-honored wisdom of the 12-step AA program with the profound
              <br />
              spiritual insights of the Bhakti tradition. It offers a safe and
              supportive <br />
              environment where our clients can explore their unique path
              towards <br /> recovery. <br />
              The essence of the fellowship is simplicity and inclusivity. The
              only <br /> prerequisite for joining is a sincere longing for
              recovery. The Recovery <br />
              Annex embraces individuals from all walks of life, recognising
              that the <br /> desire for healing transcends all boundaries.
            </p>

            <button>VISIT WEBSITE</button>
            <button>DONATE</button>
          </div>
          <div className="con-2-image">
            <img src={rimg3} />
          </div>
        </div>
        {/* ------------container-5--------------- */}
        <div className="recovery-container-5">
          <p>
            We should be in harmony with our own <br /> consciousness; our mind,
            body,and soul <br />
            should be one in interest and in purpose. And <br /> in that unified
            condition, we can actually <br /> express that natural innate love
            that we have <br /> found in our own life in everything we do in{" "}
            <br />
            the world.
          </p>
          <h1>RADHANATH SWAMI</h1>
        </div>
      </div>
    </>
  );
};

export default RecoveryAnnex;
