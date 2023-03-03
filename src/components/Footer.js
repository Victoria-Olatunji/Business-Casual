import React from 'react';
import pic10 from '../img/logo.jpg'
import pic11 from '../img/facebook.png'
import pic12 from '../img/linkedin.png'
import pic13 from '../img/youtube.png'
import pic14 from '../img/twitter.png'
import pic15 from '../img/instagram.png'

function Footer() {
  return (
      <>
      <footer className="footer text-faded text-center py-5">
        {/* <div className="footer-container">
        <p class="m-0 small">HEALTHENS</p>
        <p class="m-0 small">help@healthens.com</p>
        <p class="m-0 small">+2348056498337</p>
        <p class="m-0 small">+2348056498337</p>
        <p class="m-0 small">&copy; 2023 HEALTHENS</p>
        </div>
        <div className="footer-service">
        <p class="m-0 medium">SERVICES </p>
        <p class="m-1 medium">Medical RecordManagement </p>
        <p class="m-1 medium">Hospital Dashboard </p>
        <p class="m-1 medium">Medical Consultants </p>
        <p class="m-0 medium">Book Appointment </p>
        <p class="m-0 medium">Health Check-Ins </p>
        </div>
        <div className="container">
          <p class="m-0 small">COMPANY</p>
          <div>
            <p>About Us</p>
            <p>Term of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>  
          
            <div className="container">
              <p class="m-0 small">SUPPORT</p>
              <div>
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Feedback</p>
            </div>
            </div>               */}
  <div className="row" id="footeritem">
    <div className=" advert-logo col-sm-12 col-md-6 col-lg-4">
    <img className="intro-img img-fluid mb-3 mb-lg-3 rounded" src={pic10} alt="..." />
      
      <div className='advert-texti'>help@healthens.com</div>
      <div className='advert-textii'>+2348056498337</div>
      
      <div className="row g-0" id="rowi" >
      
        <div className="advert-imgii col-2 d-none d-xl-block" >
        <img className="advert-img img-fluid mb-3 mb-lg-0 rounded" src={pic12} alt="..." />
        </div>
        <div className="advert-imgiii col-2 d-none d-xl-block" >
        <img className="advert-img img-fluid mb-3 mb-lg-0 rounded" src={pic13} alt="..." />
        </div>
        <div className="advert-imgv col-2 d-none d-xl-block" >
        <img className="advert-img img-fluid mb-3 mb-lg-0 rounded" src={pic11} alt="..." />
        </div>
        <div className="advert-imgiv col-2 d-none d-xl-block" >
        <img className="advert-img img-fluid mb-3 mb-lg-0 rounded" src={pic14} alt="..." />
        </div>
        
        <div className='advert-textiv'>&copy; 2023 HEALTHENS</div>
        <div className="advert">High quality free Bootstrap website templates. Build your next website with our modern and fully responsive web templates!</div>
      </div>
    </div>
    <div className="col-2 d-none d-xl-block">
      <div>
        <h6 id="courses">OUR SERVICES</h6>
        <ul className="footer-list" id="list">
          <div className=''>
            <a href="#">Records Management</a>
          </div>
          <div className='advert-textone'>
            <a href="#">Hospital Dashboard</a>
          </div>
          <div className='advert-texttwo'>
            <a href="#">Medical Consultant</a>
          </div>
          <div className='advert-textthree'>
            <a href="#">Book Appoinment</a>
          </div>
          <div className='advert-textfour'>
            <a href="#">Health Check-Ins</a>
          </div>
        </ul>
      </div>
    </div>
    <div className="col-2 d-none d-xl-block">
      <div className='company-advert'>
        <h6 id="courses">COMPANY</h6>
        <ul className="footer-list" id="list">
          <div className='advert-textonei'>
            <a href="#">About</a>
          </div>
          <div className='advert-textoneiii'>
            <a href="#">Terms</a>
          </div>
          <div className='advert-textoneiv'>
            <a href="#">Privacypolicy</a>
          </div>
          <div className='advert-textonev'>
            <a href="#">Careers</a>
          </div>
        </ul>
      </div>
    </div>
    <div className="col-2 d-none d-xl-block">
      <div className='company-adverti'>
        <h6 id="courses">SUPPORT</h6>
        <ul className="footer-list" id="list">
          <div className='advert-textoneii'>
            <a href="#">FAQ</a>
          </div>
          <div className='advert-textoneiv'>
            <a href="#">Healthcenter</a>
          </div>
          <div className='advert-textonevii'>
            <a href="#">Feedback</a>
          </div>
        </ul>
      </div>
    </div>
   
  </div>
        </footer>
      </>
  );
}

export default Footer;
