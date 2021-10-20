import React from "react";
import { FiInstagram } from '../../../node_modules/react-icons/fi'
import { FaWhatsapp, FaFacebook } from '../../../node_modules/react-icons/fa'
import { BiCopyright } from '../../../node_modules/react-icons/bi'

const Footer = () => {
    return (
        <footer className="social-footer">
            <div>
                <img className="logoFooter" src="https://res.cloudinary.com/dus99ir1n/image/upload/v1633443235/GlanGlow/granGlowLogo_hhtzit.png" alt="Logo corporativo"/>
            </div>
            <div>
                <ul className="menuSimple">
                    <li className="footerSocialMediaIcon">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"className="socialMediaIcon">
                        <FiInstagram />
                        </a>
                    </li>
                    <li className="footerSocialMediaIcon">
                        <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer"className="socialMediaIcon">
                        <FaWhatsapp />
                        </a>
                    </li>
                    <li className="footerSocialMediaIcon">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="socialMediaIcon">
                        <FaFacebook className=""/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footerCopyright">
                <h4>
                    Copyright 
                </h4>
                <BiCopyright />
                <h4>
                    2021 
                </h4>
            </div>
        </footer>
    )
}

export default Footer;