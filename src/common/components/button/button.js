import React from 'react'
import style from './button.module.scss';


const Button = (props) => {
    return (
        <div className={style.button}>
            <button>{props.name}</button>
        </div>
    )
}

export default Button