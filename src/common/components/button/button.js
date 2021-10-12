import React from 'react'
import style from './button.module.scss';


const Button = ({name,...restProps}) => {
    return (
        <div className={style.button}>
            <button {...restProps}>{name}</button>
        </div>
    )
}

export default Button