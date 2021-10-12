import React from 'react';
import style from './Contact.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/button";

import Slide from 'react-reveal/Slide';


const Contact = () => {
    return (
        <div id='contact' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact'}/>
                <Slide right>
                    <form className={style.message}>
                        <input type="text" placeholder={'Name*'}/>
                        <input type="text" placeholder={'Email*'}/>
                        <textarea placeholder={'Message*'}></textarea>
                        <Button name={'send message'}/>
                    </form>
                </Slide>

            </div>
        </div>
    );
}

export default Contact;