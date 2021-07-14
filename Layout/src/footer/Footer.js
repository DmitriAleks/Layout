import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footer}>
                <span>Иван Иванов</span>
                <div className={style.barcode}></div>
                <span>Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;