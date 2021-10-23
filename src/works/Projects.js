import React from 'react';
import style from './Projects.module.scss'
import Project from './work/Project';
import Title from '../common/components/title/Title';
import socialImage from '../assets/image/socialNetwork.jpg'
import todoImage from '../assets/image/Todo.jpg'
import mapCountries from '../assets/image/MapCountriesl.jpg'

const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };
    const country = {
        color: 'blue',
        backgroundImage: `url(${mapCountries})`,
    };
    return (
        <div id='projects' className={style.worksBlock}>
            <div className={style.worksContainer}>
               <Title title={'Projects'}/>
                <div className={style.works}>
                    <Project name={'Network'} link={'https://dmitrialeks.github.io/Countries'}
                             description={`Don't lose contact with loved ones. Use the social network.`} style={social}/>
                    <Project name={'Todo list'} link={''}
                             description={'Bad memory? Now this is not a problem, Todo list will help you.'}
                             style={todoList}/>
                    <Project name={'Countries'}  link={'https://dmitrialeks.github.io/Countries'}
                             description={`Can't decide where to go on vacation? Country list for you.`} style={country}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;