import React from 'react';
import style from './FreelanceOption.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/button";

const FreelanceOption = () => {
    return (
        <div className={style.freelanceOption}>
            <div className={`${styleContainer.container} ${style.freelanceOptionContainer}`}>
               <Title title={'I Am Available For Freelance'}/>
                <Button name={'here me'}/>
            </div>
        </div>
    );
}

export default FreelanceOption;