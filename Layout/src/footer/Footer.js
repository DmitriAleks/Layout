import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footer}>
                <span className={style.text}>Иван Иванов</span>
                <div className={style.barcode}>
                    <div className={style.b}></div>

                    <div className={style.b}></div>

                    <div className={style.b}></div>

                    <div className={style.b}></div>
                </div>
                <span className={style.textTwo}>Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;