import React from "react";
import Nav from "./components/layout/Nav";
import SwiperImg from "./components/mainpage/SwiperImg";
import Topic from "./components/topic/Topic"

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<SwiperImg />}></Route>
        <Route path='/man' element={<Topic />}></Route>
        <Route path='*' element={<div style={{ fontSize: '30rem' }}>404</div>}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
