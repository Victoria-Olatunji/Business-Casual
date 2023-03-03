import { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import PatientLogin from './pages/PatientLogin';
import PatientRegistration from './pages/PatientRegistration';


function App() {
  // const [account, setAccount] = useState(); // state variable to set account.
  
  // useEffect(() => {
  //   async function load() {
  //     const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  //     const accounts = await web3.eth.requestAccounts();
      
  //     setAccount(accounts[0]);
  //   }
    
  //   load();
  //  }, []);
  return (
    <div className="App">
      {/* <p>Your account is: {account}</p> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/patientlogin" element={<PatientLogin />}></Route>
          <Route path="/patientRegistration" element={<PatientRegistration />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
