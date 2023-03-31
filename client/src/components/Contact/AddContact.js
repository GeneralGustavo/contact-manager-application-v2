import React from 'react';
import "./AddContact.css";
import { FaArrowLeft, FaUserPlus} from "react-icons/fa";
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import { Link } from 'react-router-dom';

const AddContact = () => {
  return (
    <div>
        <Header/>
        <div className='contact_wrapper'>
            <form action='' method="">
              <div className='page_row_1'>
                <div className="page_row_1_a">
                  Add Contact
                </div>
                <div className="page_row_1_b">
                  <Link to="/profile">
                    <FaArrowLeft/>
                    Back
                  </Link>
                </div>
              </div>
              <div className='page_row_2'>
                <div className="input_grp">
                  <input type="text" placeholder='First Name'/>
                  <input type="text" placeholder='Last Name'/>
                </div>

                <div className="input_grp">
                  <input type="email" placeholder='Email'/>
                  <input type="text" placeholder='Phone'/>
                </div>
              </div>
              <div className='page_row_3'>
                {/* <div className='btn_grp'> */}
                  <Link to="/profile" className='cancle_btn'>
                    Cancel
                  </Link>
                  <button className='create_btn'>Create</button>
                {/* </div> */}
              </div>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default AddContact