import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './model/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInView from './views/LogInView';
import Home from './views/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
     <ThemeProvider theme={theme}>
    
    
    <Routes>
    <Route path="/" element={<LogInView/>} />
           <Route path="/login" element={<LogInView/>} />
           <Route path="/home" element={<Home/>} />
          
       </Routes>
       </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
