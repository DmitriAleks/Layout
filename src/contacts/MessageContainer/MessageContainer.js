import style from './MessageContainer.module.scss';
import emailjs from "emailjs-com";
import {useRef, useState} from "react";
import s from "../../common/components/button/button.module.scss";


const MessageContainer = () => {
    const form = useRef();
    console.log(form)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_swdp72q', 'template_wfsq99a', form.current, 'user_Bmsa0zezbigDP9UtDwhoA')
            .then((result) => {
            }, (error) => {
            } );
        e.target.reset()
    };

    return (

            <form className={style.message} ref={form} onSubmit={sendEmail} >
                <input required id="name" type="text" placeholder={'Name*'} name="user_name"/>
                <input required id={'email'} type="email" placeholder={'Email*'} name="user_email"/>
                <textarea required id="message" placeholder={'Message*'}  name="message" ></textarea>
                <input type="submit" value="Send Message" className={s.button}/>
            </form>

    )
}
export default MessageContainer