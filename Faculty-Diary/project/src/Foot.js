import React from "react";
import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa';
function Foot() {
  const iconStyles={
    color:'white'
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="thr">About Us</h3>
          <p>It is the website Designed to store and retrive the data form the database in easier way</p>
        </div>
        <div className="footer-column">
          <h3 className="thr">Contact Us</h3>
          <p>123 Main St.</p>
          <p>Anytown, USA 12345</p>
          <p>Phone: 555-555-5555</p>
          <p>Email: info@Website.com</p>
        </div>
        <div className="footer-column">
          <h3 className="thr">Follow Us</h3>
          <ul className="social-links">
            <li id='icon'><a href="#"><FaFacebookF style={iconStyles} /></a></li>
            <li><a href="#"><FaTwitter style={iconStyles} /></a></li>
            <li><a href="#"><FaInstagram style={iconStyles} /></a></li>
          </ul>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Web Techies. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Foot;
