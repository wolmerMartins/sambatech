import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

import './style.css';

function App() {
  return (
    <div className="App">
      <div className="layout-container">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
