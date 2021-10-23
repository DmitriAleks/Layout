import React from 'react';
import style from './Project.module.scss'
import s from '../../common/styles/TestButton.module.scss'

const Project = (props) => {
    return (
        <div className={style.a}>
            <div className={style.image} style={props.style} >
                <a className={s.btn} href={props.link} target="_blank"> <span>view</span></a>
            </div >
            <div className={style.projectInfo}>
                <h3 className={style.nameProject}>{props.name}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;