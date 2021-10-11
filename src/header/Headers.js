import React from 'react';
import style from './Header.module.scss'
import Nav from "./nav/Nav";
import BurgerNav from "./burgerNav/BurgerNav";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.fixed}>
                <Nav/>
                <BurgerNav/>
            </div>
        </header>

    );
}

export default Header;
