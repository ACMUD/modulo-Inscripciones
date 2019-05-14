import React from 'react';
import './App.css';
import Header from './header/header';
import ContentApp from './contentApp/contentApp'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ContentApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
