import React from 'react';
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import "./ContactUs.css";
// import{ Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div>
        <Header/>
        <section>
        <main>

<div className="contact-wrapper">
    <div className="contact-head">CONTACT US</div>
    <div className="contact-icon">
        <span>
            <i className="fa fa-phone"></i> 08141652023
        </span>
    </div>

    <div className="contact-icon">
        <span>
            <i className="fa fa-envelope"></i> cmc@mail.com
        </span>
    </div>

    <div className="contact-icon">
        <span>
            <i className="fa-brands fa-instagram"></i> @classic_mens_collection
        </span>
    </div>

    <div className="contact-icon">
        <span>
            <i className="fa-brands fa-facebook"></i> @classic_mens_collection
        </span>
    </div>

    <div className="contact-icon">
        <span>
            <i className="fa-brands fa-twitter"></i> @classic_mens_collection
        </span>
    </div>
</div>
</main>
        </section>
        <Footer/>
    </div>
  )
}

export default ContactUs