import React from 'react';
import style from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";
import Title from "../common/components/title/Title";


const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
               <Title title={'Projects'}/>
                <div className={style.works}>
                    <Work name={'Network'}description={'the best network in the world'}/>
                    <Work name={'Todo list'} description={'the best todo list in the world the best todo list in the world the best todo list in the world the best todo list in the world'}/>
                </div>
            </div>

        </div>
    );
}

export default Works;