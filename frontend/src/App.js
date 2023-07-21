import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from './pages/Welcome';
import LoginPage from './pages/LoginPage';
import ForgotPage from './pages/ForgotPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ResetPage from './pages/ResetPage';
import AddLogPage from './pages/AddLogPage';

function App() 
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Welcome />} />
      <Route path="/loginpage" index element={<LoginPage />} />
      <Route path="/forgotpage" index element={<ForgotPage />} />
      <Route path="/registerpage" index element={<RegisterPage />} />
      <Route path="/homepage" index element={<HomePage/>} />
      <Route path="/addlogpage" index element={<AddLogPage/>} />
      <Route path="/reset" index element={<ResetPage />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
