import React from 'react';
import style from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>

        </div>
    );
}

export default Works;