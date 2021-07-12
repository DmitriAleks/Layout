import React from 'react';
import './App.css';
import Header from './header/Headers'
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import FrilansOption from "./frilansOption/FrilansOption";
import Contacts from "./contacts/Contacts";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works />
            <FrilansOption/>
            <Contacts/>
        </div>
    );
}

export default App;
