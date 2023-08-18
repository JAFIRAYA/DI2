
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainScreen from './compenents/Main';
import FavoritesScreen from './compenents/FavoritesScreen';
import Header from './compenents/Header';

const App = () => {
  return (
    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
      </Routes>
      </>
  );
};

export default App;
