import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple, FaMicrosoft } from 'react-icons/fa';
import './AuthForm.css';
import Navbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on isLogin value
    if (isLogin) {
      // Handle login form submission
    } else {
      // Handle sign-up form submission
    }
  };

  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required  className='formInput'/>
          </div>
        )}
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required className='formInput'/>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required className='formInput'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required className='formInput'/>
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required className='formInput'/>
          </div>
        )}
        <div className="form-group">
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </div>
        <div className="form-group">
          <p className="social-text">or {isLogin ? 'login' : 'sign up'} with:</p>
          <div className="social-icons">
            <FaGoogle className="social-icon google" />
            <FaFacebook className="social-icon facebook" />
            <FaApple className="social-icon apple" />
            <FaMicrosoft className="social-icon microsoft" />
          </div>
        </div>
        <div className="form-group">
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <a href=""onClick={toggleForm}>{isLogin ? 'Sign Up' : 'Login'}</a>
          </p>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default AuthForm;
