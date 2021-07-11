import React from 'react';
import style from './FrilansOption.module.css'
import styleContainer from './../common/styles/Container.module.css'

const FrilansOption = () => {
    return (
        <div className={style.frilansOption}>
            <div className={`${styleContainer.container} ${style.frilansOptionContainer}`}>
                <h2>Рассматриваю варианты удалённой работы</h2>
                <div className={style.hire}>Нанять меня</div>
            </div>
        </div>
    );
}

export default FrilansOption;