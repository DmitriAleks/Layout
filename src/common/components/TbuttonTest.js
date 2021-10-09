import React from 'react'
import style from '../styles/TestButton.module.scss'

const TbuttonTest = (props) => {
    return (

        <a href={''} className={style.btn}>{props.name}</a>
        )
}

export default TbuttonTest