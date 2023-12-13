import React from 'react';
import { AuthProvider } from './ContextAPI/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Layout from './Pages/Layout';
import ChiSono from './Pages/ChiSono';
import Contatti from './Pages/Contatti';
import Login from './Auth/Login';
import Dashboard from './Auth/Dashboard';
import withAuth from './Middlewares/withAuth';
/* import oldPosts from './data/posts'; */


// App.js
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={React.createElement(withAuth(Homepage))}></Route>
            <Route path="/chi-sono" element={<ChiSono />}></Route>
            <Route path="/contatti" element={<Contatti />}></Route>
            <Route path="/login" element={<Login />} />

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App
