import React from 'react';
import './App.css';
import Header from './header/Headers'
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import FreelanceOption from "./frilansOption/FreelanceOption";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works />
            <FreelanceOption/>
            <Contact/>
            <Footer/>
        </div>
    );
}
//testj;
export default App;
