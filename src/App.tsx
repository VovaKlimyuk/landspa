/* eslint-disable import/order */
import React from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home/Home';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => (
  <>
    <Navbar />

    <div className="pages">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="#about" Component={About} />
        <Route path="#blog" Component={About} />
        <Route path="#footer" Component={Footer} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </div>

  </>
);

export default App;
