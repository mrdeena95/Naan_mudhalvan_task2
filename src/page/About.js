// src/components/About.js

import React from 'react';
import './about.css';
//import '.src/assest/cake.png';
function About() {

  return (
    
    <div className="about">
      <img src="./img/logo.png"  />
      <div class="text-box">
      <h2> Grocery Delivery App</h2>
      <p>
        Welcome to our grocery delivery app! We are dedicated to making your grocery shopping experience convenient and efficient.
        Our mission is to provide fresh, high-quality groceries right to your doorstep, saving you time and ensuring that you have access to the essentials you need.
        Thank you for choosing us for your grocery needs. We look forward to serving you.
      </p>
      </div>
    </div>
  );
}

export default About;
