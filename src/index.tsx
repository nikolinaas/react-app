import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInView from './LogInView';
import Home from './Home';
import Layout from './Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
     <ThemeProvider theme={theme}>
    
    
    <Routes>
         
           <Route path="/login" element={<LogInView/>} />
           <Route path="/home" element={<Home/>} />
         
       </Routes>
       </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();