import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prologue from './components/prolouge';
import Tokenomics from './components/Tokenomics';

function SwarajCoin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="prologue" element={<Prologue />} />
        <Route path="tokenomics" element={<Tokenomics />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <SwarajCoin />
  </React.StrictMode>,
  document.getElementById('root')
);


