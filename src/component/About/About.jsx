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
          <p>
            At Veteran Benevolent Support Africa, we understand the unique
            challenges faced by retired military veterans. Our user-friendly
            platform offers a range of features and services to address diverse
            needs. From health awareness and education to education and
            training, entrepreneurship courses, employment, support services and
            much more. Join us as we provide comprehensive support to retired
            military veterans. Together, we can make a difference in the lives
            of veterans in Africa.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
