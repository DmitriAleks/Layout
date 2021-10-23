import React from 'react'
import style from './button.module.scss';
import {Link} from "react-scroll";

const Button = ({name, ...restProps}) => {
    return (
        <div className={style.button}>
            <button {...restProps}><Link to="contact">  {name} </Link></button>
        </div>
    )
}

export default Button