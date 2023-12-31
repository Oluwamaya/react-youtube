import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from './props/Second';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Second' element={<Second/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
