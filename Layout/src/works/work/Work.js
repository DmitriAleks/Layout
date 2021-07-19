import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div >
            <div className={style.workBlock}>
                <img src='' className={style.images}/>
            </div>
            <div className={style.spans}>
                <span>Название проекта</span>
                <span>Краткое описание</span>
            </div>


        </div>
    );
}

export default Work;