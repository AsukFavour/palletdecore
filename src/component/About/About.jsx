import React from 'react';
import './About.css'; // Import your CSS file for styling
import Navbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';
import ImageJumbotron from '../../assets/sofa.png'; // Import your image for jumbotron
import Image1 from '../../assets/sofa.png'; // Import your images for collage
import Image2 from '../../assets/sofa.png'; // Import your images for collage

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <div className="image-jumbotron">
          <img src={ImageJumbotron} alt="Jumbotron" className="jumbotron-image" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sem eu est
            luctus ullamcorper. Integer euismod hendrerit est, in posuere magna
            tincidunt id. Nulla facilisi.
          </p>
<<<<<<< HEAD
          <p>
            Sed vulputate, neque ac ultrices commodo, libero lacus aliquet ligula, nec
            tristique magna odio vitae risus. Vestibulum eget nisi nec est rhoncus
            eleifend.
          </p>
=======
          
>>>>>>> 3cb0721f4ec827f50604d4fda1e439329086e80e
        </div>
        <div className="images-collage">
          <img src={Image1} alt="Image 1" className="about-image" />
          <img src={Image2} alt="Image 2" className="about-image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
