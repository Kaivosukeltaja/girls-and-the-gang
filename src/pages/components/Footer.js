import React from "react"
import { MdOutlineMail, MdOutlineWhatsapp, MdOutlineFacebook } from "react-icons/md";
import { Email } from "react-obfuscate-email";

import { footer, link, icon } from "./Footer.module.css"
import Logo from "./Logo";



const Footer = () => (
    <footer className={footer}>
        <Logo />

        <div className={link}>
          <MdOutlineMail className={icon} />
          <Email 
              email="heini.mielonen1@gmail.com" 
              className={link}
          />
        </div>

        <a href="tel:+358443810803" className={link}>
          <MdOutlineWhatsapp className={icon} />
          +358443810803
        </a>

        <a href="https://www.facebook.com/GirlsAndTheGang" className={link}>
          <MdOutlineFacebook className={icon} />
          Facebook
        </a>

    </footer>
  );
  
  export default Footer;