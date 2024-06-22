import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './model/Theme';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { UserContext, UserProvider } from './UserContext';
import { initialState } from './model/User';
import userReducer from './reducers/UserReducer';
import { ActionType } from './Actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);


root.render(
  
        <App />
);

reportWebVitals();
