import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <h2 className={style.text}>Contacts</h2>
                    <form className={style.addresses}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                    <span className={style.textTwo}>send</span>
            </div>
        </div>
    );
}

export default Contacts;