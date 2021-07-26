import React from 'react';
import style from './Contact.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Contact = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <h2 className={style.title}>Contact</h2>
                    <form className={style.message}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                    <span className={style.textTwo}>send message</span>
            </div>
        </div>
    );
}

export default Contact;