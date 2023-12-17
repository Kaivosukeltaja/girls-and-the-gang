import React from "react"
import { MdOutlineMail } from "react-icons/md";
import { Email } from "react-obfuscate-email";

import { footer, link } from "./Footer.module.css"
import Logo from "./Logo";



const Footer = () => (
    <footer className={footer}>
        <div>
        <Logo />
        <div>
          <MdOutlineMail/>
          <Email 
              email="heini.mielonen1@gmail.com" 
              className={link}
          />
        </div>
       
        </div>
       

    </footer>
  );
  
  export default Footer;