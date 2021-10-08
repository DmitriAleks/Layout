import React from 'react';
import style from './Skill.module.scss'

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}
export default Skill;
