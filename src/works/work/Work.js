import React from 'react';
import style from './Work.module.css'

const Work = (props) => {
    return (
        <div className={style.a}>
            <div className={style.image} style={props.style} >
                <a className={style.button} href="">Посмотреть</a>
            </div >
            <div className={style.projectInfo}>
                <h3 className={style.nameProject}>{props.name}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
}

export default Work;