import React from 'react';
import './App.scss';
import Header from './header/Headers'
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./works/Projects";
import FreelanceOption from "./frilansOption/FreelanceOption";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects />
            <FreelanceOption/>
            <Contact/>
            <Footer/>
        </div>
    );
}
//testj;
export default App;
