import React, {useState} from 'react';
import style from './Skill.module.scss'
import Diagramma from "../../common/components/Diagramma";

const Skill = (props) => {
    const [status, setStatus] = useState(true)

    const Test = () => {
        setStatus(!status)
    }
    return (
        <div onClick={Test} className={style.skill}>

            <div className={style.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}
export default Skill;


