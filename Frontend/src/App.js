import React from 'react';
import './index.css';
import { Header } from './Componentes/Header';
import 'boxicons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Paginas } from './Componentes/Paginas';





function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Paginas />
      </Router>
    </div>
  )
}
export default App;