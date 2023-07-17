import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tech from './components/Tech';
import Feedback from './components/Feedback';


function App() {

  
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" exact Component={Home}> </Route>

        <Route path="/feedback"  Component={Feedback}> </Route>
    </Routes>
    </>
  );
}

export default App;
