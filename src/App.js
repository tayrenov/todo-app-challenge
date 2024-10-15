import React, { useState } from 'react';

import './reset.css';  
import './App.css';
import TodoApp from './components/TodoApp';
import HeaderPanel from './components/HeaderPanel/HeaderPanel';

function App() {

  const [darkTheme , setTheme] = useState('true')
  const switchTheme = () => {
    setTheme(!darkTheme)
  }   
  return (
    <div className={darkTheme ? "app-wrapper dark-theme" : "app-wrapper light-theme"} >
      <div className="app-container">
        <HeaderPanel switchTheme={switchTheme}/>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
