import React from 'react';
import style from './Contact.module.scss'
import Title from "../common/components/title/Title";
import Slide from 'react-reveal/Slide';
import MessageContainer from "./MessageContainer/MessageContainer";



const Contact = () => {



    return (
        <div id='contact' className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={'Contact'}/>
                <Slide right>
                    <div className={style.cont}>
                        <MessageContainer/>
                    </div>

                </Slide>

            </div>
        </div>
    );
}

export default Contact;