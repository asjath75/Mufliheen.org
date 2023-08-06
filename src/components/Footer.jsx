import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaRegCopyright
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="left">
          <h2>ABOUT US</h2>
          <hr/>
          <div className="prag">
            <p>
              All Ceylon Thareekathul Mufliheen, a Sufi order, was founded 35 years ago by the spiritual leader Sheihul Mufliheen M.S.M.
              Abdullah(Rah), popularly known as “Pailvaan” meaning (Wrestler) in English. “Thareeka” is an Arabic word, meaning “a Path”. 
              This spiritual path leads one to attain eternal peace, tranquility and union with God. The word “Thareekathul Mufliheen” is 
              also an Arabic word meaning, “The path of the fearless victorious”.
            </p>
          </div>
          <div>
            <FaFacebookF className="icons" />
            <FaInstagram className="icons" />
            <FaTwitter className="icons" />
            <FaYoutube className="icons" />
            <FaTelegram className="icons" />
          </div>
        </div>

        <div className="middle">
          <h2>ADDRESS</h2>
          <hr/>
          <div>
            <div className="middle-icons">
              <MdLocationOn />
              <p>All Ceylon Thareekathul Mufliheen</p>
            </div>
            <div className="middle-icons">
              <FaPhoneAlt />
              <p>+94 65 2245003, +94 77 3113436</p>
            </div>
            <div className="middle-icons">
              <FaEnvelope />
              <p>info@mufliheen.org</p>
            </div>
          </div>
        </div>

        <div className="right">
          <h2>CONTACT US</h2>
          <hr/>
          <div className="mail">
            <p>Email *</p>
            <input />
            <p>Message *</p>
            <input />
            <button>Send</button>
          </div>
        </div>

      </div>
      <div className="copyWrite">
        <p>Created By <span><a>All Ceylon Thareekathul Mufliheen</a></span> |<FaRegCopyright className="c"/>  All rights reserved to www.mufliheen.org</p>
      </div>

    </footer>
  );
}

export default Footer;
