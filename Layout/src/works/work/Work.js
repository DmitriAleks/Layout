import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div className={style.workBlock}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Texas_256.svg/384px-Texas_256.svg.png"   className={style.images}/>
            <span>Название проекта</span>
            <span>Краткое описание</span>
        </div>
    );
}

export default Work;