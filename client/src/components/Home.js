import React from 'react';
import Footer from './Partials/Footer/Footer';
import Header from './Partials/Header/Header';
import logo from "../asset/CM1.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='header_wrapper'>
          <div className='contact_head'>
            <h1>Contacts Management Application</h1>
          </div>

          <div className='contact_sub_head'>
            <h3>
              Organize your contacts.<br/>
              Be more productive when working in Teams
            </h3>
          </div>

          <div className='banner_box'>
            <img src={logo} alt='CMA 1'/>
          </div>
        </div>
        <Footer/>
    </div>
  )
};

export default Home