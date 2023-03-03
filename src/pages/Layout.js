import React from 'react';
import { Link } from 'react-router-dom'
import pic10 from '../img/logo.jpg'

function Layout() {
  return (
    <>
    {/* <header>
            <h1 className="site-heading text-center text-faded d-none d-lg-block">
                <span className="site-heading-upper text-primary mb-3">A Free Bootstrap Business Theme</span>
                <span className="site-heading-lower">Business Casual</span>
            </h1>
        </header> */}

        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                {/* <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <p className="logo">
                <Link className="nav-link text-uppercase" to="/"><img className="sectioniii-image" src={pic10} alt="accessibility" /></Link>
                </p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx auto">
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/">Home</Link></li>
                        {/* <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="#sectioniii-container">About Us</a></li> */}
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/">About</Link></li>
                        {/* <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="#sectioniii-container">Consultants</a></li> */}
                        <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="#introiii">Login</a></li>
                        {/* <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl" href="#sectioniii-container">Get Started!</a></div> */}
                    </ul>
                </div>
            </div>
        </nav>
        {/* <Home /> */}
    </>
  );
}

export default Layout;
