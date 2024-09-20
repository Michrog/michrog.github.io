import React, {useState, useContext} from 'react';
import './App.css';
import './styles/Darkmode.css'
import Page from './components/Page'
import { DarkmodeContext } from "./components/context/DarkmodeContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const value = {darkMode, handleDarkMode}

  function handleDarkMode(dm){
    setDarkMode(dm)
    document.querySelector('body').className = `${dm ? 'dm' : 'lm'}`
  }

  return (
    <DarkmodeContext.Provider value={value}>
      <Page></Page>
    </DarkmodeContext.Provider>
  );
}