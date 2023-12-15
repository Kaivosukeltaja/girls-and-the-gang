import React from "react"
import { MdOutlineMail } from "react-icons/md";


import { footer } from "./Footer.module.css"
import Logo from "./Logo";



const Footer = () => (
    <footer className={footer}>
        <div>
        <Logo />
        <div>
          <MdOutlineMail/>
          <span>
            heini.mielonen1@gmail.com
          </span>
        </div>
       
        </div>
       

    </footer>
  );
  
  export default Footer;