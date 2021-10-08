import React from 'react';
import style from './Contact.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contact = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact'}/>
                    <form className={style.message}>
                        <input type="text" placeholder={'Name*'}/>
                        <input type="text" placeholder={'Email*'}/>
                        <textarea placeholder={'Message*'}></textarea>

                    </form>
                <button type={'submit'} className={style.textTwo}>send message</button>
            </div>
        </div>
    );
}

export default Contact;