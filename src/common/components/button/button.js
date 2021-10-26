import React from 'react'
import style from './button.module.scss';
import {Link} from "react-scroll";

const Button = ({name, ...restProps}) => {
    return (
        <div>
            <button {...restProps} className={style.button}><Link to="contact" className={style.link}>  {name} </Link></button>
        </div>
    )
}

export default Button