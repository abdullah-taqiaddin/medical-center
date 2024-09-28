import "./Footer.css"; // Add this to import the CSS file
import { Link } from "react-router-dom";
import facebookIcn from "../../Assets/icons/facebook-icn.svg";
import xIcn from "../../Assets/icons/x-icn.svg";
import instagramIcn from "../../Assets/icons/instagram-icn.svg";
import linkdinIcn from "../../Assets/icons/linkedin-icn.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-section">
          <div className="listTitle">Useful Links</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/PatientRegistration">New Patient Form</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="listTitle">Services</div>
          <ul>
            <li>
              <Link to="/">Family Medicine</Link>
            </li>
            <li>
              <Link to="/">Preventative Care</Link>
            </li>
            <li>
              <Link to="/">Pediatric Care</Link>
            </li>
            <li>
              <Link to="/">Women’s Health</Link>
            </li>
            <li>
              <Link to="/">Walk-In Clinic</Link>
            </li>
            <li>
              <Link to="/">Minor Procedures</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="listTitle">Business Hours</div>
          <ul>
            <li>
              <Link to="/">Mon-Fri: 8:00 AM - 6:00 PM</Link>
            </li>
            <li>
              <Link to="/">Sat: 9:00 AM - 3:00 PM</Link>
            </li>
            <li>
              <Link to="/">Sun: Closed</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="listTitle">Contact</div>
          <ul>
            <li>
              <Link to="/">123 Main St, City, State</Link>
            </li>
            <li>
              <Link to="/">(123) 456-7890</Link>
            </li>
            <li>
              <a href="mailto:info@stonebrookmedical.co">
                info@stonebrookmedical.co
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <img
            alt="social"
            style={{ cursor: "pointer" }}
            src={facebookIcn}
          ></img>
          <img alt="social" style={{ cursor: "pointer" }} src={xIcn}></img>
          <img
            alt="social"
            style={{ cursor: "pointer" }}
            src={instagramIcn}
          ></img>
          <img
            alt="social"
            style={{ cursor: "pointer" }}
            src={linkdinIcn}
          ></img>
        </div>
        <p>© 2024 Stonebrook Medical Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
