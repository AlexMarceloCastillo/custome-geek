
import React from 'react';

//css
import './Footer.component.css';

//icons
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const FooterComponent = () => {
    return (
        <div className="footer mt-4">
            <div className="footer-info">

            </div>
            <div className="footer-icons text-center">
                <div className="icons">
                    <a href="https://twitter.com"><AiFillTwitterCircle className="info-icon twitter" /></a>
                    <a href="https://www.instagram.com/"><AiFillInstagram className="info-icon insta" /></a>
                </div>
                <small>© 2022 Custome Geek, todos los derechos reservados</small>
            </div>
            <a className="info-send-whatsapp" href="https://api.whatsapp.com/send?phone=+5492615179908&text=urlencodedtext">
                <BsWhatsapp className="info-icon whatsapp" />
            </a>

        </div>
    );
}

export default FooterComponent;
