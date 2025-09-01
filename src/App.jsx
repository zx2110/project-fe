import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Upload from './pages/upload.jsx';
import Result from './pages/Result.jsx';
import './App.css';

function App() {
  const [showResultMenu, setShowResultMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <div className="main">
          <Sidebar showResultMenu={showResultMenu} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload setShowResultMenu={setShowResultMenu} />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
