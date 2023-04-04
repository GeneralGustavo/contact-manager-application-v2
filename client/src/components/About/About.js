import React from 'react';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import "./About.css";


const About = () => {
  return (
    <div>
        <Header/>
        <main>

        <div className="about-wrapper">
            <div class="about-head">ABOUT US</div>

            <div className="about-content">
            WE BUILD WEB PARTS AND TOOLS FOR MICROSOFT 365.
            OUR AIM IS FOR OUR PRODUCTS TO BE INSIGHTFUL, IMPACTFUL AND USEFUL .
            EASY TO INSTALL, EASY TO USE AND USEFUL.
            </div>

            <div className="about-content">
            OUR EXPERIENCE WITH SHAREPOINT DATES BACK TO 2003 AS DEVELOPERS, ADMINISTRATORS, 
            CONSULTANTS AND EVANGELISTS. AS WE HAVE GROWN UP WITH SHAREPOINT WE ARE PASSIONATE 
            ABOUT THE BENEFITS AND CAPABILITIES OF THE MICROSOFT 365 PLATFORM 
            </div>


            <div className="about-content">
            WE ARE CONSTANTLY EXPLORING NEW CAPABILITIES, ASSESSING POTENTIAL AND INVESTIGATING
             OPPORTUNITIES TO ENHANCE. WE HAVE EMBRACED THE LATEST TECHNIQUES AND FRAMEWORKS TO 
             ESTABLISH NEW PRODUCTS THAT WE THINK WILL IMPROVE ON THE IMPRESSIVE FOUNDATIONS OF 
             MICROSOFT 365 AND SHAREPOINT ONLINE. WE UNDERSTAND THE JOURNEY THAT MICROSOFT TAKEN 
             AND WE SEE THE OPPORTUNITIES, THE FEATURES THAT CAN BE ENHANCED AND THE OUTSTANDING 
             CAPABILITIES OF THE PLATFORM.
            </div>

        </div>
    </main>
        <Footer/>
    </div>
  )
}

export default About