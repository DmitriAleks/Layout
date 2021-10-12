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
                        <a href={'https://t.me/DmitriAlekseenok'} style={telegramI}></a>
                        <a href={'https://github.com/DmitriAleks?tab=repositories'} style={gitIcon}></a>
                        <a href={'https://www.linkedin.com/feed/'} style={linkedinIcon}></a>
                        <a href={'https://www.codewars.com/users/DmitriAleks'} style={codeIcon}></a>
                    </div>
                    <span className={style.textEnd}>© 2021  All Rights Reserved.</span>
                </div>
            </div>
    );
}

export default Footer;