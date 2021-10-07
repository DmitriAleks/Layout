import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from '../assets/image/reactIcon.png'


const Skills = () => {

        const test = {
            color: 'blue',
            backgroundImage: `url(${reactIcon})`,
        }




    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet,'}/>
                    <Skill title={'CSS'} description={'sed do eiusmod tempor incididunt ut labore et dolore '}/>
                    <Skill title={'React'}  description={' consectetur adipisicing elit, magna aliqua Ut enim' } style={test}/>
                </div>
            </div>
        </div>
    );
}
export default Skills;
