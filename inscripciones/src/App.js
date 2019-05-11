import React from 'react';
import './App.css';
import Header from './header/header';
import ContentApp from './contentApp/contentApp'

function App() {
  return (
    <div style={{ height: '100vh' }} className="App">
      <Header />
      <ContentApp />
    </div>
  );
}

export default App;
