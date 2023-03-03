import React from 'react';
import Layout from './Layout';
import pic1 from '../img/intro.jpg'
import pic2 from '../img/cloud.jpg'
import pic3 from '../img/access.jpg'
import pic4 from '../img/paperless.jpg'
import pic5 from '../img/login.jpg'
import pic6 from '../img/patient.jpg'
import pic7 from '../img/lastpic.jpg'
import pic8 from '../img/register.jpg'
import pic9 from '../img/hoslogin.jpg'


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
                        <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl" href="#introiii">Get Started!</a></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="second-section">
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
       
        {/* <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                            <img class="sectioniii-image" src={pic5} alt="accessibility" />
                            </h2>
                            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                            <img class="sectioniii-image" src={pic5} alt="accessibility" />
                            </h2>
                            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                            <img class="sectioniii-image" src={pic5} alt="accessibility" />
                            </h2>
                            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                            <img class="sectioniii-image" src={pic5} alt="accessibility" />
                            </h2>
                            <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Hospital Registration</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

 <div div id="introiii">
 <div className="lieii">Register/Login to Healthens</div>
 </div>
  <div className="row g-3" id="row">
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card" >
      <img className="sectioniii-image" src={pic8} alt="accessibility" />
        <div className="card-body">
        <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="#sectioniii-container">Register</a></div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card" >
      <img className="sectioniii-image" src={pic9} alt="accessibility" />
        <div className="card-body">
        <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="/">Hospital Login</a></div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card" >
      <img class="sectioniii-image" src={pic5} alt="accessibility" />
        <div className="card-body">
        <div class="sectioniii-button mx-auto"><a class="btn btn-sectioniii btn-xl" href="/">Patient Login</a></div>
        </div>
      </div>
    </div>
    
    
</div>     
{/* <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Our Promise</span>
                                <span class="section-heading-lower">To You</span>
                            </h2>
                            <p class="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <Footer /> 
    </>
    );
}

export default Home;
