import React from 'react';
import style from './Footer.module.scss'
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
                    <span >Dmitri Alekseonok</span>
                    <div className={style.social}>
                        <a href={'https://t.me/DmitriAlekseenok'}  target="_blank" style={telegramI}></a>
                        <a href={'https://github.com/DmitriAleks?tab=repositories'}  target="_blank" style={gitIcon}></a>
                        <a href={'https://www.linkedin.com/feed/'}  target="_blank" style={linkedinIcon}></a>
                        <a href={'https://www.codewars.com/users/DmitriAleks'}  target="_blank" style={codeIcon}></a>
                    </div>
                    <span className={style.textEnd}>© 2021  All Rights Reserved.</span>
                </div>
            </div>
    );
}

export default Footer;