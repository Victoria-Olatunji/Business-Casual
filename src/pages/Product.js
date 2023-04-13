import React from 'react';
import Layout from './Layout';
import pic1 from '../img/intro.jpg'
import pic2 from '../img/cloud.jpg'
import pic3 from '../img/access.jpg'
import pic4 from '../img/paperless.jpg'
import pic5 from '../img/hospital.jpg'
import pic6 from '../img/patient.jpg'
import pic7 from '../img/lastpic.jpg'


import Footer from '../components/Footer';

function Home() {

    // const pics = pic1

  return (
    <>
      <Layout />
      <div>
      <section class="page-section clearfix">
            <div class="container">
                <div class="intro">
                    <div class ="first">
                    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src={pic1} alt="..." />
                    </div>       
                    <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 class="section-heading mb-4">
                            {/* Get your medical history stored on the blockchain */}
                            An electronic medical record system 
                            that aids easy storage of medical records 

                        </h2>
                            {/* <span class="section-heading-upper">Fresh Coffee</span> */}
                            {/* <span class="section-heading-lower">Worth Drinking</span> */}
         
                        <p class="mb-3">Store and access your medical records from anywhere and at anytime. Trusted by Government Authorities</p>
                        <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl" href="#sectioniii-container">Get Started!</a></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section about-heading">
            <div className="sectionii-container">
                <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={pic7} alt="..."  />
            </div>
        </section>
      </div>
        {/* <section class="page-section cta">
            <div class="sec-container">
                <div class="sectionII-images">
                    <div class="sectionII-images col-xl-9 mx-auto">
                        <div class="section-imagei">
                        <img class="image" src={pic2} alt="accessibility" />
                        <div class="image-text">A seamless and secured platform </div>
                        </div>
                        <div class="section-imageii">
                        <img class="image" src={pic3} alt="accessibility" />
                        <p class="image-text"> Easy accessibility of records</p>
                        </div>
                        <div class="section-imageiii">
                        <img class="image" src={pic4} alt="accessibility" />
                        <p class="image-text">Digitalize your medical record</p>
                        </div>            
                    </div>
                </div>
            </div>
        </section>  */}
        <section>
        <div class="testi">Register</div>
        <div className="page-section clearfix">
            <div className='test'>
            <div class="col-sm-6 col-md-6 col-lg-4 sectioniii-imagei">
            <img class="sectioniii-image" src={pic5} alt="accessibility" />
            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 sectioniii-imagei">
            <img class="sectioniii-image" src={pic5} alt="accessibility" />
            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 sectioniii-imagei">
            <img class="sectioniii-image" src={pic5} alt="accessibility" />
            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 sectioniii-imagei">
            <img class="sectioniii-image" src={pic5} alt="accessibility" />
            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
            </div>
            </div>
            
        <div class="row g-3" id="row">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card" >
      <img class="intro-img img-fluid mb-3 mb-lg-0 rounded card-img-top" src={pic1} alt="..." />
        </div>
      </div>
    </div>
    <div class="row g-3" id="row">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card" >
      <img class="intro-img img-fluid mb-3 mb-lg-0 rounded card-img-top" src={pic1} alt="..." />
        </div>
      </div>
    </div>
    <div class="row g-3" id="row">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card" >
      <img class="intro-img img-fluid mb-3 mb-lg-0 rounded card-img-top" src={pic1} alt="..." />
        </div>
      </div>
    </div> 
        </div>
        <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                            <img class="sectioniii-image" src={pic5} alt="accessibility" />
                            </h2>
                            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </section>
        <section class="page-section-third">
            <div id="sectioniii-container">
            <div className="lieii">Register/Login to Healthens</div>
                Sign Up/Login to Healthens
            </div>
            <div class="sectionIII-images">
                    <div class="sectionIII-images col-xl-9 mx-auto">
                        <div class="sectioniii-imagei">
                        <img class="sectioniii-image" src={pic5} alt="accessibility" />
                        <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
                        </div>
                        <div class="sectioniii-imageii">
                        <img class="sectioniii-image" src={pic6} alt="accessibility" />
                        <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Patient Registration</a></div>
                        {/* <p class="image-text">Patient Login</p> */}
                        </div>
                        <div class="sectioniii-imageiii">
                        <img class="sectioniii-image" src={pic5} alt="accessibility" />
                        <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="/PatientLogin">Hospital Login</a></div>
                        </div>
                        <div class="sectioniii-imageiv">
                        <img class="sectioniii-image" src={pic6} alt="accessibility" />
                        <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="/PatientLogin">Patient Login</a></div>
                        </div>
                    </div>
                </div>
        </section>
        
        
        <Footer /> 
    </>
    );
}

export default Home;
