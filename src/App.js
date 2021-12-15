import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import Home from './pages/Home';
import ShowPage  from './pages/ShowPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
  <>
    <Routes>
      <Route element = {<ShowPage/>} path = '@username' />
      <Route element = {<Home/>} path = '/' />
      <Route element = {<PostPage/>} path = "/post" />
      <Route element = {<LoginPage/>} path = "/login" />
      <Route element = {<NotFound/>} path = "*" />
    </Routes>
  </>
  );
};

export default App;