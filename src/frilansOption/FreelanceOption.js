import React from 'react';
import style from './FrilansOption.module.css'
import styleContainer from './../common/styles/Container.module.css'

const FreelanceOption = () => {
    return (
        <div className={style.freelanceOption}>
            <div className={`${styleContainer.container} ${style.freelanceOptionContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удалённой работы</h2>
                <div className={style.hire}>Нанять меня</div>
            </div>
        </div>
    );
}

export default FreelanceOption;