import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './AuthForm.css';
import Navbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';

const AuthForm = () => {
  const history = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleSuccess = (message) => {
    toast.success(message);
    history.push('/');
  };

  const handleFailure = (message) => {
    toast.error(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const firstName = form.firstName ? form.firstName.value : '';
    const lastName = form.lastName ? form.lastName.value : '';

    if (isLogin) {
      // Handle login form submission
      try {
        // Send login request to the backend
        await axios.post('https://your-backend-url/login', {
          email,
          password,
        });

        // Handle the response (e.g., store token, redirect, etc.)
        handleSuccess('Login successful');
      } catch (error) {
        handleFailure('Login failed');
        console.error('Login failed:', error);
      }
    } else {
      // Handle sign-up form submission
      const confirmPassword = form.confirmPassword.value;

      // Validate form data
      if (password !== confirmPassword) {
        handleFailure('Passwords do not match');
        return;
      }

      try {
        // Send sign-up request to the backend
        await axios.post('https://your-backend-url/signup', {
          email,
          password,
          firstName,
          lastName,
        });

        // Handle the response (e.g., store token, redirect, etc.)
        handleSuccess('Sign-up successful');
      } catch (error) {
        handleFailure('Sign-up failed');
        console.error('Sign-up failed:', error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          {!isLogin && (
            <div className="form-group">
              <input type="text" id="firstName" name="firstName" placeholder="First Name" required className="formInput" />
            </div>
          )}
          {!isLogin && (
            <div className="form-group">
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" required className="formInput" />
            </div>
          )}
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" required className="formInput" />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Password" required className="formInput" />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="formInput"
              />
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
            </div>
          </div>
          <div className="form-group">
            <p className="toggle-text">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <a href="" onClick={toggleForm}>{isLogin ? 'Sign Up' : 'Login'}</a>
            </p>
          </div>
        </form>
 <ToastContainer/>
      </div>
      <Footer />
    </>
  );
};

export default AuthForm;
