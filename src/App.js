import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as  Switch, Router, Route, Link, Routes, } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      
      
        <Route path="/" exact Component={Home}> </Route>

    </Routes>
    </>
  );
}

export default App;
