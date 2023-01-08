import React from 'react';
import Nav from './Nav'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ListOfCalc from './ListOfCalc';
import Calculator from './Calculator';

function App() {
  return (
    <div >
      <Nav/>
       <Routes>
        <Route path="/calc/" element={<ListOfCalc />}/>
        <Route path="/calc/calculator" element={<Calculator />}/>
        </Routes>
    </div>
  );
}

export default App;
