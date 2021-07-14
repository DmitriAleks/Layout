import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                    <span>Контакты</span>
                    <form className={style.addresses}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                    <span>Отправить</span>


            </div>
        </div>
    );
}

export default Contacts;