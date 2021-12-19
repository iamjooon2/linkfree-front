import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import ShowPage  from './pages/ShowPage';
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
  <>
    <Routes>
      <Route element = {<ShowPage/>} path = '@username' />
      <Route element = {<MainPage/>} path = '/' />
      <Route element = {<AdminPage/>} path = "/admin" />
      <Route element = {<LoginPage/>} path = "/login" />
      <Route element = {<RegisterPage/>} path = "/register" />
      <Route element = {<NotFoundPage/>} path = "*" />
    </Routes>
  </>
  );
};

export default App;