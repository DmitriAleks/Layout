import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div >
            <div className={style.workBlock}>
                <a className={style.button} href="">Посмотреть</a>
            </div>
                <div>Project name </div>
                <span>Description</span>
        </div>
    );
}

export default Work;