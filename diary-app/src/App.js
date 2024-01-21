import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import CreateDiary from './components/CreateDiary';
import UpdateDiary from './components/UpdateDiary';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/creatediary" element={<CreateDiary/>}></Route>
        <Route path="/updatediary/:id" element={<UpdateDiary />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
