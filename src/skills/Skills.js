import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import skillReact from '../../src/assets/image/skillReact.png'
import skillJs from '../assets/image/skillJS.png'
import skillTS from '../assets/image/skillTS.png'
import skillRedux from '../assets/image/skillRedux.png'
import skillSass from '../assets/image/skillSass.png'
import Slide from 'react-reveal/Slide';
import Diagramma from "../common/components/Diagramma";


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
        <div id='skills' className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <Slide left>
                <div className={style.skills}>
                    <Skill title={'JavaScript'} description={'skill 4/5'} style={jsIcon}/>
                    <Skill title={'TypeScript'} description={'skill 4/5'} style={tsIcon}/>
                    <Skill title={'React'} description={'skill 4/5'} style={reactIcon}/>
                    <Skill title={'Redux'} description={'skill 4/5'} style={reduxIcon}/>
                    <Skill title={'Redux/Redux-Toolkit'} description={'skill 4/5'} style={reactIcon}/>
                    <Skill title={'SCSS/SAAS'} description={'skill 4/5'} style={sassIcon}/>
                </div>
                </Slide>
            </div>

        </div>
    );
}
export default Skills;
