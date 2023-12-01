import React from "react";
import "./About.css";
import Navbar from "../TopNavbar/TopNavbar";
import Footer from "../Footer/Footer";
import about from "../../assets/sofa.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about-header">
          <img src={about} alt="Header Image" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            blanditiis itaque sunt accusantium eum alias hic maxime, architecto
            ipsam esse dignissimos magnam at, minus placeat rerum eveniet quos
            modi. Excepturi ut earum id sit, quasi suscipit quia cupiditate
            fuga, ipsa, porro reprehenderit tempora! Placeat in maiores
            quibusdam quia esse unde at facere numquam corporis. Magni, eaque,
            commodi cumque adipisci non quaerat neque expedita eos quisquam
            dolorem omnis ut facilis saepe placeat nostrum similique consectetur
            ducimus architecto et eligendi, doloremque dolore. Doloremque eius
            voluptatum iure illum aliquam consectetur itaque vel tempore
            laboriosam. Voluptates dolor quam optio rerum itaque atque neque
            fuga!
          </p>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
