import React from 'react'
import style from '../test/Test.module.css';


const TestButton = (props) => {
    return (
        <div className={style.button}>
            <button>Наведи на меня</button>
        </div>
    )
}

export default TestButton