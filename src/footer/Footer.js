import React from 'react';
import style from './Footer.module.css'
import telegramIcon from '../assets/image/telegramIcon.png'
import footerGit from '../assets/image/footerGit.png'
import footerLinkedin from '../assets/image/footerLinkedin.png'
import footerCode from '../assets/image/footerCode.png'
const Footer = () => {
    const telegramI = {
        backgroundImage: `url(${telegramIcon})`
    }
    const gitIcon = {
        backgroundImage: `url(${footerGit})`
    }
    const linkedinIcon = {
        backgroundImage: `url(${footerLinkedin})`
    }

    const codeIcon = {
        backgroundImage: `url(${footerCode})`
    }




    return (
        <div className={style.footerBlock}>
            <div className={style.footer}>
                <span className={style.name}>Dmitri</span>
                <div className={style.social}>
                    <li style={telegramI}></li>
                    <li style={gitIcon}></li>
                    <li style={linkedinIcon}></li>
                    <li style={codeIcon}></li>
                </div>
                <span className={style.textEnd}>© 2019 beingeorge, All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;