import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/footerImage.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <Image className="footerLogo" src={logo} alt="Footer Logo" />
        <hr className="line"></hr>
        <div className="footerBottom">
          <div className="list">
            <li>COMPANY</li>
            <li>About Us</li>
            <li>Partner with us</li>
            <li>Blog</li>
          </div>
          <div className="list">
            <li>LEGAL</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </div>
          <div className="list">
            <li>CONTACT</li>
            <li>hi@zetapp.in</li>
            <li>+91-7417274072</li>
          </div>
          <div className="list">
            <li>SOCIAL</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Face Book</li>
            <li>Telegram</li>
            <li>Whats App</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
