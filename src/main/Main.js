import React from 'react';
import style from './Main.module.scss'
import Flip from 'react-reveal/Flip';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


const Main = () => {
    return (
        <div id='main' className={style.mainBlock}>
            <div className={style.text}>
                <span>Hi There</span>
                <span>I am Dmitri <span> Alekseonok</span> </span>
                <ReactTypingEffect
                    text={["Frontend Developer"]}
                />
            </div>
            <Tilt className="Tilt" options={{ max : 25 }} >
                <Flip bottom>
                    <div className={style.photo}>
                        <div className={style.image}></div>
                    </div>
                </Flip>
            </Tilt>


        </div>
    );
}

export default Main;
