// Item.js
import React, { useState } from "react";
import "./Item.css";
import Navbar from "../TopNavbar/TopNavbar";
import Footer from "../Footer/Footer";
import image from "../../assets/sofa.png";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at a time
    slidesToScroll: 1,
  };

  const youMightLikeData = [
    {
      id: 1,
      image: image,
      name: "Chair",
      price: 200,
    },
    {
      id: 2,
      image: image,
      name: "Table",
      price: 500,
    },
    {
      id: 3,
      image: image,
      name: "Lamp",
      price: 80,
    },
    {
      id: 4,
      image: image,
      name: "Shelf",
      price: 300,
    },
    {
      id: 5,
      image: image,
      name: "Storage",
      price: 300,
    },
  ];

  // Find the selected item by id
  const selectedItem = youMightLikeData.find(
    (item) => item.id === parseInt(id)
  );

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const addToCart = () => {
    setShowModal(true);
    const item = {
      image: selectedItem.image,
      name: selectedItem.name,
      price: selectedItem.price,
      quantity,
    };

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <>
      <Navbar />
      <div className="item">
        <div className="item-image">
          <img src={image} alt="Item" />
        </div>
        <div className="item-details">
          <h1 className="item-name">{selectedItem.name}</h1>
          <p className="item-description">{`₦${selectedItem.price} NGN`}</p>
          <p className="item-description">Item Description</p>
          <div className="item-quantity">
            <input
              type="number"
              id="quantity"
              min="1"
              defaultValue="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="item-actions">
            <button className="add-to-cart-button" onClick={addToCart}>
              Add to Cart
            </button>
            {/* <button className="pay-button">
              <Link to={"/checkout"}>Check out</Link>
            </button> */}
            <button className="details-toggle-button" onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
          </div>
          {showDetails && (
            <div className="item-details-section">
              <h2>Details</h2>
              <p>Additional information about the item.</p>
            </div>
          )}
        </div>
      </div>
      <div className="you-might-like-section">
        <h2>You Might Like</h2>
        
        <Slider {...carouselSettings}>
  {youMightLikeData.map((item) => (
    <div key={item.id}>
      <div className="card">
        <img src={item.image} alt={item.name} className="card-image" />
        <div className="card-overlay">
          <div className="card-details">
            {/* Your card content here */}
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

        
      </div>
      {showModal && (
        <div className="modal">
          <div className="dialog">
            <div className="dialog-content">
              <h3>Item added to cart</h3>
              <img src={image} alt="Item" className="dialog-image" />
              <p className="dialog-name">{selectedItem.name}</p>
              <div className="dialog-buttons">
                <button className="dialog-button">
                  <Link to={"/cart"}>View Cart</Link>
                </button>
                <button className="dialog-button">
                  <Link to={"/checkout"}>Check out</Link>
                </button>
                <button className="dialog-button" onClick={closeModal}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Item;
