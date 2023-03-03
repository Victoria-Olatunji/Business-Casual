import { useState, useEffect } from 'react';
import Web3 from 'web3';
import React from 'react';
import Layout from './Layout';
import pic2 from '../img/about.jpg'
import pic3 from '../img/ethereum.jpg'
import Footer from '../components/Footer';

const PatientRegistration = () => {
  const [account, setAccount] = useState(); // state variable to set account.
  
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);
  return (
    <>
    <Layout />

    <div id="signup-page"> 
    <div>
    <img className="login-image" src={pic3} alt="accessibility" />
    <p class="login-text">A decentralized Platform to Store Medical History</p>
    </div>
        <div className="form">
            <form> 
                <div className="patient-login">
                <h3>Patient Login</h3>
                </div>
                <p className="key">Enter your Private Key</p>
                <fieldset class="signup-data">
                  <input type="text" placeholder="Private Key*"/>
                </fieldset>
                {/* <fieldset class="signup-data">
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
                </fieldset> */}
                 <div class="intro-button mx-auto"><a class="btn btn-login btn-xl" href="/patientdashboard">Login</a></div>
              </form>
              <div className="new-user">New User? Sign Up</div>
              <div className="account"> {account}</div>
        </div>        
      </div>

    <Footer />
    </>
  );

};

export default PatientRegistration;



