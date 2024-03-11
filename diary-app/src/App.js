import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Const from "./Const.js"
import CreateDiary from './components/CreateDiary';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UpdateDiary from './components/UpdateDiary';
import './App.css';

function App() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    handleOrderChange();
  }, []);

  const handleOrderChange = async (e) => {
    let displayOrder = '';
    if(typeof e === "undefined") {
      displayOrder = Const.ORDER_OPTIONS[0].value;
    } else {
      displayOrder = e.value;
    }
    await fetch(Const.DIARIES_API_URL + "/" + displayOrder, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setDiaries(data);
      });
  };

  return (
    <Router>
      <Navbar handleOrderChange={handleOrderChange}/>
      <Routes>
        <Route path="/" element={<Home diaries={diaries} setDiaries={setDiaries} handleOrderChange={handleOrderChange}/>}></Route>
        <Route path="/creatediary" element={<CreateDiary/>}></Route>
        <Route path="/updatediary/:id" element={<UpdateDiary />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
