import React from 'react';
import { icons } from 'react-icons/lib';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import "./Profile.css";
import { 
    FaTrash, 
    FaEdit, 
    FaPlusSquare, 
    FaTools, 
    FaArrowRight, 
    FaEnvelope,
    FaPhone
} from "react-icons/fa";
import profilePhoto from "../../asset/OBO.jpg";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <React.Fragment>
        <Header/>
        <div className='profile_wrapper'>
            <div className='profile_col_1'>
                <div className='profile_col_1_sub_1'>
                    <img src={profilePhoto} alt='' />
                </div>
                <div className='profile_col_1_sub_2'>Gustavo OfAbuja</div>
                <div className='profile_col_1_sub_3'>3/29/2023 &bull; 10:21 am</div>
                <div className='profile_col_1_sub_4'>
                    <Link to="/profile/settings">
                        <FaTools/>
                        Settings
                    </Link>
                    <Link to="/profile/logout">
                        <FaArrowRight/>
                        Logout
                    </Link>
                </div>
            </div>

            <div className='profile_col_2'>
                <div className='profile_col_2_sub_1'>
                    <form action='' method=''>
                        <div className='search_box'>
                            <input type="search" name='' id='' placeholder='Find contact' /> 
                        </div>
                    </form>
                    
                    <div className='number_of_contact_box'>108 Contact</div>
                    <div className='add_contact_box'>
                        <Link to="/profile/contact/add">
                            <FaPlusSquare /> Add COntact
                        </Link>
                    </div>
                </div>

                <div className='profile_col_2_sub_2'>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    
                    <div className='contact_box'>
                        <div className='contact_box_item'>Gustavo OfAbuja</div>
                        <div className='contact_box_item'>
                            <a href='mailto:Gustavo@mail.com'>
                                <FaEnvelope/> Send Email
                            </a>
                        </div>
                        <div className='contact_box_item'>
                            <FaPhone/>
                            08141652023
                        </div>

                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>

                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Profile