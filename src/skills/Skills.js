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
import Bounce from 'react-reveal/Bounce';


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
                <div className={style.skills}>
                    <Bounce left>
                        <Skill title={'JavaScript'} description={'4/5'} style={jsIcon}/>
                    </Bounce>
                    <Bounce top>
                        <Skill title={'TypeScript'} description={'4/5'} style={tsIcon}/>
                    </Bounce>
                    <Bounce right>
                        <Skill title={'React'} description={'4/5'} style={reactIcon}/>
                    </Bounce>
                    <Bounce left>
                        <Skill title={'Redux'} description={'4/5'}
                               style={reduxIcon}/>
                    </Bounce>
                    <Bounce bottom>
                        <Skill title={'Redux/Redux-Toolkit'}
                               description={'4/5'} style={reactIcon}/>
                    </Bounce>
                    <Bounce right>
                        <Skill title={'SCSS/SAAS'} description={'4/5'} style={sassIcon}/>
                    </Bounce>
                </div>
            </div>

        </div>
    );
}
export default Skills;
