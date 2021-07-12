import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <span>Контакты</span>
                <div className={style.addresses}></div>
                <span>Отправить</span>
            </div>
        </div>
    );
}

export default Contacts;