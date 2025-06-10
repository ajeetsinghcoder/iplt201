import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


import Tata from "../../asstes/images/ipl.png";
import My11Circle from "../../asstes/images/my11circle.jpg";
import Ceat from "../../asstes/images/CEAT.png";
import Rupay  from "../../asstes/images/Rupee-Sign-White.png";
import StarSport from "../../asstes/images/Star Sportslogo.png";
import Jiohotstar from "../../asstes/images/sports.png";
import WonderCement from "../../asstes/images/wander-cement.png";
import AngelOne from "../../asstes/images/AngelOne_logo.png";

const Footer = ()=>{
    return (

       <footer className="bcci-footer">
      <div className="partners">
        <div className="partner-group">
          <span>TITLE SPONSOR</span>
          <img src={Tata} alt="TATA" />
        </div>
        <div className="partner-group">
          <span>ASSOCIATE PARTNER</span>
          <img src={My11Circle} alt="My11Circle" />
          <img src={AngelOne} alt="AngelOne" />
          <img src={Rupay} alt="RuPay" />
        </div>
        <div className="partner-group">
          <span>OFFICIAL UMPIRE PARTNER</span>
          <img src={WonderCement} alt="Wonder Cement" />
        </div>
        <div className="partner-group">
          <span>OFFICIAL STRATEGIC TIMEOUT PARTNER</span>
          <img src={Ceat} alt="CEAT" />
        </div>
        <div className="partner-group">
          <span>OFFICIAL BROADCASTER</span>
          <img src={StarSport} alt="Star Sports" />
        </div>
        <div className="partner-group">
          <span>OFFICIAL DIGITAL STREAMING PARTNER</span>
          <img src={Jiohotstar} alt="Jio Hotstar" />
        </div>
      </div>

      <div className="footer-sections">
        <div className="section">
          <h4>TEAM</h4>
          <ul>
            <li>Chennai Super Kings</li>
            <li>Delhi Capitals</li>
            <li>Gujarat Titans</li>
            <li>Kolkata Knight Riders</li>
            <li>Lucknow Super Giants</li>
            <li>Mumbai Indians</li>
            <li>Punjab Kings</li>
            <li>Rajasthan Royals</li>
            <li>Royal Challengers Bengaluru</li>
            <li>Sunrisers Hyderabad</li>
          </ul>
        </div>
        <div className="section">
          <h4>ABOUT</h4>
          <ul>
            <li>About Us</li>
            <li>Anti Corruption Code</li>
            <li>Anti Doping Rules</li>
            <li>TUE Application Form</li>
            <li>Anti Discrimination Code</li>
            <li>Clothing And Equipment Regulations</li>
            <li>Code Of Conduct For Players And Teams Officials</li>
            <li>News Access Regulations</li>
            <li>Image Use Terms</li>
          </ul>
        </div>
        <div className="section">
          <h4>GUIDELINES</h4>
          <ul>
            <li>IPL Code Of Conduct For Match Officials</li>
            <li>Brand And Protection Guidelines</li>
            <li>Governing Council</li>
            <li>Match Playing Conditions</li>
            <li>PMOA Minimum Standard</li>
            <li>Suspect Action Policy</li>
          </ul>
        </div>
        <div className="section">
          <h4>CONTACT</h4>
          <ul>
            <li>Contact Us</li>
            <li>Sponsorship</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="site-footer">
        <p>
        <FontAwesomeIcon icon={faCopyright} /> 2025 BCCI.TV
         </p>
        </div>
      </div>
    </footer>
        

    );
}

export default Footer;