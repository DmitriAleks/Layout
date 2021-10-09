import React from 'react';
import style from './Contact.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/button";
import TbuttonTest from "../common/components/TbuttonTest";


const Contact = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact'}/>
                    <form className={style.message}>
                        <input type="text" placeholder={'Name*'}/>
                        <input type="text" placeholder={'Email*'}/>
                        <textarea placeholder={'Message*'}></textarea>
                        {/*<Button name={'send message'}/>*/}
                        <TbuttonTest name={'button'}/>
                    </form>


            </div>
        </div>
    );
}

export default Contact;