import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import skillReact from '../../src/assets/image/skillReact.png'
import skillJs from'../assets/image/skillJS.png'
import skillTS from '../assets/image/skillTS.png'
import skillRedux from '../assets/image/skillRedux.png'
import skillSass from '../assets/image/skillSass.png'


const Skills = () => {

    const reactIcon = {
        color: 'blue',
        backgroundImage: `url(${skillReact})`,
    }
    const sassIcon = {
        color: 'blue',
        backgroundImage: `url(${skillSass})`,
    }
    const jsIcon = {
        color: 'blue',
        backgroundImage: `url(${skillJs})`,
    }
    const tsIcon = {
        color: 'blue',
        backgroundImage: `url(${skillTS})`,
    }
    const reduxIcon = {
        color: 'blue',
        backgroundImage: `url(${skillRedux})`,
    }



    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JavaScript'} description={'Lorem ipsum dolor sit amet,'}  style={jsIcon}/>
                    <Skill title={'TypeScript'} description={'sed do eiusmod tempor incididunt ut labore et dolore '}  style={tsIcon}/>
                    <Skill title={'React'} description={' consectetur adipisicing elit, magna aliqua Ut enim'}
                           style={reactIcon}/>
                    <Skill title={'Redux'} description={' consectetur adipisicing elit, magna aliqua Ut enim'}
                           style={reduxIcon}/>
                    <Skill title={'Redux/Redux-Toolkit'} description={' consectetur adipisicing elit, magna aliqua Ut enim'}
                           style={reactIcon}/>
                    <Skill title={'SCSS/SAAS'} description={' consectetur adipisicing elit, magna aliqua Ut enim'}
                           style={sassIcon}/>

                </div>
            </div>
        </div>
    );
}
export default Skills;
