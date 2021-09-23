import React from 'react';
import style from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Work from './work/Work';
import Title from '../common/components/title/Title';
import socialImage from '../assets/image/socialNetwork.jpg'
import todoImage from '../assets/image/TODO-List.png'

const Works = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
               <Title title={'Projects'}/>
                <div className={style.works}>
                    <Work name={'Network'}description={'the best network in the world'} style={social}/>
                    <Work name={'Todo list'} description={'the best todo list in the world the best todo list in the world the best todo list in the world the best todo list in the world'}
                    style={todoList}/>
                </div>
            </div>

        </div>
    );
}

export default Works;