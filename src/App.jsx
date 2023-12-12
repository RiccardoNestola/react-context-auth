import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Layout from './Pages/Layout';
import ChiSono from './Pages/ChiSono';
import Contatti from './Pages/Contatti';
/* import oldPosts from './data/posts'; */


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/chi-sono" element={<ChiSono />}></Route>
          <Route path="/contatti" element={<Contatti />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
