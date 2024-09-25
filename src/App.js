import React, {useState} from 'react';
import './App.css';
import './styles/Darkmode.css'
import Page from './components/Page'
import { DarkmodeContext } from "./components/context/DarkmodeContext";
import {dmstylebody, lmstylebody} from './styles/themes.js'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const value = {darkMode, handleDarkMode}

  function handleDarkMode(dm){
    setDarkMode(dm)

    if(dm){
      for (let s in dmstylebody){
        document.body.style[s] = dmstylebody[s]
      }
    } else {
      for (let s in lmstylebody){
        document.body.style[s] = lmstylebody[s]
      }
    }

    }
  

  return (
    <DarkmodeContext.Provider value={value}>
      <Page></Page>
    </DarkmodeContext.Provider>
  );
}