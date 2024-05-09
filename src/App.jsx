import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import About from "./components/About/About";
import Teaching from "./components/Teaching/Teaching";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/about" element={<About />} />
          <Route path="/Teaching" element={<Teaching />} />
          {/* <Route path="/books" element={<Books />} /> */}
        </Routes>
        {/* <Books /> */}
        {/* <Teaching/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
