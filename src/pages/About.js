import React from 'react';
import Layout from './Layout';
import pic2 from '../img/about.jpg'
import Footer from '../components/Footer';


function About() {
  return (
    <>
    <Layout />
    <section className="page-section about-heading">
            <div className="container">
                {/* <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={pic2} alt="..."  /> */}
                <div className="about-heading-content">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 mx-auto">
                            <div className="bg-faded rounded p-5">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-lower">About HealthBlock</span>
                                </h2>
                                <p>
                                A Decentralised platform to store patient's medical records
                                in a chronological order using blockchain technology. No need to carry all the files when visiting a doctor. Scan your
                                public key and have your records at your finger tips anywhere Assuming it as a legally compliant activity, medical
                                history can never be framed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <Footer />
    </>
  );
  
}

export default About;
