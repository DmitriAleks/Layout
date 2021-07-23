import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div >
            <div className={style.imageContainer} >
                <a className={style.button} href="">Посмотреть</a>
            </div >
                <span className={style.nameProject}>Project name </span>
                <div className={style.description}>Description</div>
        </div>
    );
}

export default Work;