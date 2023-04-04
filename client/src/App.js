

import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup/Signup';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import AddContact from './components/Contact/AddContact';
import EditContact from './components/Contact/EditContact';
import Settings from './components/Settings/Settings';
import ChangePassword from './components/Profile/ChangePassword';
import DeleteAccount from './components/Profile/DeleteAccount';
import EditProfile from './components/Profile/EditProfile';
import About from './components/About/About';
// import EditProfile from './components/Profile/EditProfile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={ <Signup/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/contact" element={ <ContactUs/>} />
        <Route path="/about" element={ <About/>} />

        <Route path="/profile" element={ <Profile/>} />
        <Route path="/profile/contact/add" element={ <AddContact/>} />
        <Route path="/profile/contact/edit" element={ <EditContact/>} />
        <Route path="/profile/settings" element={ <Settings/>} />


        <Route path="/profile/Password" element={ <ChangePassword/>} />
        <Route path="/profile/delete-account" element={ <DeleteAccount/>} />
        <Route path="/profile/edit" element={ <EditProfile/>} />



        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
