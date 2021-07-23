import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div className={style.startDiv}>
            <div className={style.workBlock}>
                <a className={style.button} href="">Посмотреть</a>
            </div>
                <div>Название проекта</div>
                <span>Краткое описание</span>



        </div>
    );
}

export default Work;