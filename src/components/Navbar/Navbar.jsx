// import React from "react";
// import logo from "../assets/RNS-Logo.webp";
// import resimg from "../assets/res-img-1.jpeg";
// import inimg from "../assets/ini-img-1.jpeg";
// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <>
//       <div className="navbar">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>
//         <div className="nav">
//           <Link to={"/about"}>
//             <a className="about-section">ABOUT</a>
//           </Link>
//           <NavLink to="/initiative">INITIATIVES</NavLink>
//           <NavLink to="/resources">RESOURCES</NavLink>
//           <NavLink to="/get-involved">GET INVOLVED</NavLink>
//           <NavLink to="/newsletter">NEWSLETTER</NavLink>
//           <NavLink to="/contact">CONTACT</NavLink>
//         </div>
        
//       </div>
//       {/* ----------resources----------- */}

//       <div className="resources">
//           <div className="res-con-1">
//             <h1>Media</h1>
//             <h1>Books</h1>
//             <h1>Teachings</h1>
//           </div>
//           <div className="res-con-2">
//             <img src={resimg} />
//           </div>
//           <div className="res-con-3">
//             <p>
//               Take a deep dive into the catalogue of <br /> videos, images and
//               articles within <br /> Radhanath Swami Media. <br />
//             </p>
//             <button>LEARN MORE</button>
//           </div>
//         </div>
//       {/* -----------initiatives----------- */}
      
//       <div className="initiatives">
//         <div className="ini-con-1">
//           <h1>Vani School</h1>
//           <h1>The Recovery Annex</h1>
//           <h1>Govardhan Ecovillage</h1>
//           <h1>Hospitals</h1>
//           <h1>Midday Meals</h1>
//           <h1>Bhakti Center</h1>
//         </div>
//         <div className="ini-con-2">
//           <img src={inimg} />
//         </div>
//         <div className="ini-con-3">
//           <p>
//             Vani School provides worldwide access to <br /> professional online
//             courses centred around <br /> Bhakti yoga on various subjects such
//             as, <br /> Ayurveda, yoga, kirtan and much more. <br />
//           </p>
//           <button>LEARN MORE</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



// ------This is for mouseenter or mouseleave--------------


// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/RNS-Logo.webp";
// import resimg from "../assets/res-img-1.jpeg";
// import inimg from "../assets/ini-img-1.jpeg";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isResourcesVisible, setResourcesVisible] = useState(false);
//   const [isInitiativesVisible, setInitiativesVisible] = useState(false);

//   const handleMouseEnter = () => {
//     setResourcesVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setResourcesVisible(false);
//   };

//   const handleMouseEnters = () => {
//     setInitiativesVisible(true);
//   };

//   const handleMouseLeaves = () => {
//     setInitiativesVisible(false);
//   };

//   return (
//     <>
//       <div className="navbar">
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>
//         <div className="nav">
//           <Link to="/about">
//             <span className="about-section">ABOUT</span>
//           </Link>
//           <NavLink 
//             to="/resources" 
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             RESOURCES
//           </NavLink>
//           <NavLink to="/initiative"
//            onMouseEnter={handleMouseEnters}
//            onMouseLeave={handleMouseLeaves}
//            >INITIATIVES
//            </NavLink>

//           <NavLink to="/get-involved">GET INVOLVED</NavLink>
//           <NavLink to="/newsletter">NEWSLETTER</NavLink>
//           <NavLink to="/contact">CONTACT</NavLink>
//         </div>
//       </div>

//       {/* Show the Resources component only if it's visible */}
//       {isResourcesVisible && (
//         <div className="resources" onMouseLeave={handleMouseLeave}>
//           <div className="res-con-1">
//             <h1>Media</h1>
//             <h1>Books</h1>
//             <h1>Teachings</h1>
//           </div>
//           <div className="res-con-2">
//             <img src={resimg} alt="Resources" />
//           </div>
//           <div className="res-con-3">
//           <p>
//                Take a deep dive into the catalogue of <br /> videos, images and
//                articles within <br /> Radhanath Swami Media. <br />
//             </p>
//             <button>LEARN MORE</button>
//           </div>
//         </div> 
//       )}

//        {/* Show the Initiatives component only if it's visible */}

//        {isInitiativesVisible && (
//         <div className="initiatives">
//         <div className="ini-con-1">
//            <h1>Vani School</h1>
//           <h1>The Recovery Annex</h1>
//            <h1>Govardhan Ecovillage</h1>
//            <h1>Hospitals</h1>
//            <h1>Midday Meals</h1>
//            <h1>Bhakti Center</h1>
//          </div>
//          <div className="ini-con-2">
//            <img src={inimg} />
//          </div>
//          <div className="ini-con-3">
//            <p>
//              Vani School provides worldwide access to <br /> professional online
//              courses centred around <br /> Bhakti yoga on various subjects such
//              as, <br /> Ayurveda, yoga, kirtan and much more. <br />
//            </p>
//            <button>LEARN MORE</button>
//          </div>
//        </div>
//        )}

//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/RNS-Logo.webp";
import resimg from "../assets/res-img-1.jpeg";
import inimg from "../assets/ini-img-1.jpeg";
import "./Navbar.css";

const Navbar = () => {
  // State to track the visibility of the Resources section
  const [isResourcesVisible, setResourcesVisible] = useState(false);
  const [isInitiativesVisible, setInitiativesVisible] = useState(false);

  const handleMouseEnter = () => {
    setResourcesVisible(true);  // Show the Resources section
    setInitiativesVisible(false);

     
  };

  const handleMouseLeave = () => {
    setResourcesVisible(false); // Hide the Resources section
  };

  const handleMouseEnters = () => {
    setInitiativesVisible(true);  // Show the Initiative section
    setResourcesVisible(false); 

     
  }

  const handleMouseLeaves = () => {
    setInitiativesVisible(false); // Hide the Initiatives section 
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav">
          <Link to="/about">ABOUT</Link>
          {/* Handle hover to show/hide Resources */}
          <NavLink
            to="/resources"
            onMouseEnter={handleMouseEnter}
          >
            RESOURCES
          </NavLink>

          <NavLink to="/initiative"
           onMouseEnter={handleMouseEnters}
           >
            INITIATIVES
           </NavLink>
          <NavLink to="/get-involved">GET INVOLVED</NavLink>
          <NavLink to="/newsletter">NEWSLETTER</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
      </div>

      {/* Show Resources section only when isResourcesVisible is true */}
      {isResourcesVisible && (
        <div className="resources" onMouseLeave={handleMouseLeave}>
       

<div className="res-con-1">
  <NavLink to="/media"><h1>Media</h1></NavLink>
  <NavLink to="/books"><h1>Books</h1></NavLink>
  <NavLink to="/Teaching"><h1>Teachings</h1></NavLink>
</div>

          <div className="res-con-2">
            <img src={resimg} alt="Resources" />
          </div>
          <div className="res-con-3">
          <p>
                Take a deep dive into the catalogue of <br /> videos, images and
                articles within <br /> Radhanath Swami Media. <br />
             </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      )}

       {/* Show Initiatives section only when isResourcesVisible is true */}

       {isInitiativesVisible && (
        <div className="initiatives" onMouseLeave={handleMouseLeaves}>
                 <div className="ini-con-1">
                    <h1>Vani School</h1>
                   <h1>The Recovery Annex</h1>
                    <h1>Govardhan Ecovillage</h1>
                    <h1>Hospitals</h1>
                    <h1>Midday Meals</h1>
                    <h1>Bhakti Center</h1>
                  </div>
                  <div className="ini-con-2">
                    <img src={inimg} />
                  </div>
                  <div className="ini-con-3">
                    <p>
                      Vani School provides worldwide access to <br /> professional online
                      courses centred around <br /> Bhakti yoga on various subjects such
                      as, <br /> Ayurveda, yoga, kirtan and much more. <br />
                    </p>
                    <button>LEARN MORE</button>
                  </div>
                </div>
       )}
    </>
  );
};

export default Navbar;
