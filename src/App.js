// src/App.js
import React from 'react';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import HomePage from './Components/HomePage';
import JobDetail from './Components/JobDetail';
import NavBar from './Components/NavBar';



function App() {
  return (
    <>
    <NavBar/>
    <HomePage/>
    <JobDetail/>
    </>
  );
}



export default App;
