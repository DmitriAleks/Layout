import React from 'react';
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import skillFoundation from '../../src/assets/image/icons8-web-browser-60.png'
import skillRocket from '../assets/image/icons8-ракета-60.png'
import skillTest from '../assets/image/icons8-checklist-60.png'
import skillDesign from '../assets/image/icons8-pencil-case-60 (1).png'
import Slide from 'react-reveal/Slide';


const Skills = () => {

    const foundation = {
        color: 'blue',
        backgroundImage: `url(${skillFoundation})`,
    }

    const rocket = {
        color: 'blue',
        backgroundImage: `url(${skillRocket})`,
    }
    const test = {
        color: 'blue',
        backgroundImage: `url(${skillTest})`,
    }
    const design = {
        color: 'blue',
        backgroundImage: `url(${skillDesign})`,
    }


    return (
        <div id='skills' className={style.skillsBlock}>

            <div className={style.skillsContainer}>
                <Title title={'Skills'}/>
                <Slide left>
                    <div className={style.skills}>
                        <Skill title={'Foundations'} description={'Javascript, Typescript, HTML5,CSS3'} style={foundation}/>
                        <Skill title={'Development'} description={'React, Redux, Axios, Redux-Toolkit'} style={rocket}/>
                        <Skill title={'Testing'} description={'Unit Tests, SnapShot, Storybook'} style={test}/>
                        <Skill title={'Design'} description={'Material UI, Ant-Design '} style={design}/>
                    </div>
                </Slide>
            </div>

        </div>
    );
}
export default Skills;
