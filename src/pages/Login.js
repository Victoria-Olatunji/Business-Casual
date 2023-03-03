import React from 'react';
import Layout from './Layout';
import pic2 from '../img/about.jpg'
import Footer from '../components/Footer';

const PatientRegistration = () => {
  return (
    <>
    <Layout />

    {/* <div id="login-page"> 
    <p> Sign up and Own your health</p>
        <div class="form">
            <form>
                <h3>Sign Up</h3>
                <fieldset class="signup-data">
                  <legend>Name</legend>
                  <input type="text" placeholder="Your Name"/>
                </fieldset>
                <fieldset class="signup-data">
                  <legend>Email</legend>
                  <input type="text" placeholder="Your Email"/>
                </fieldset>
                <fieldset class="signup-data">
                  <legend>Password</legend>
                  <input type="password" placeholder="Password"/>
                </fieldset>
                <fieldset class="signup-data">
                  <legend> Confirm Password</legend>
                  <input type="password" placeholder="Password"/>
                </fieldset>
                <button class="continue-btn">
                    <a href="./about.html">CONTINUE</a>
                </button>
              </form>
        </div>        
      </div> */}

    <Footer />
    </>
  );

};

export default PatientRegistration;



