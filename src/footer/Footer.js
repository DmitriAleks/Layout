import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footer}>
                <span className={style.name}>Dmitri</span>
                <div className={style.social}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
                <span className={style.textEnd}>© 2019 beingeorge, All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;