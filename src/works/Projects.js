import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from './work/Project';
import Title from '../common/components/title/Title';
import socialImage from '../assets/image/socialNetwork.jpg'
import todoImage from '../assets/image/TODO-List.png'

const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div id='projects' className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
               <Title title={'Projects'}/>
                <div className={style.works}>
                    <Project name={'Network'} description={'the best network in the world'} style={social}/>
                    <Project name={'Todo list'} description={'the best todo list in the world the best todo list in the world the best todo list in the world the best todo list in the world'}
                             style={todoList}/>
                    <Project name={'Network'} description={'the best network in the world'} style={social}/>
                    <Project name={'Network'} description={'the best network in the world'} style={social}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;