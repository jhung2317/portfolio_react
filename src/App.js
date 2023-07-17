import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
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
