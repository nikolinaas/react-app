import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  ThemeProvider
} from '@material-ui/core';
import LogInView from './views/LogInView';
import { UserContext, UserProvider } from './UserContext';
import Home from './views/Home';
import { BrowserRouter, Navigate, Outlet, Route, Router, Routes } from 'react-router-dom';
import { initialState } from './model/User';
import { ActionType, Actions } from './Actions';
import { Dispatch } from "react";
import userReducer from './reducers/UserReducer';
import { theme } from './model/Theme';
import { ArtikalProvider } from './ArtikalContext';


const App = () => {

  const [state, dispatch] = useState(initialState);



  function PrivateRoute() {
    var logedIn = sessionStorage.getItem('logedin');
    var user = null;
    if (logedIn)
      user = JSON.parse(logedIn);

    return user == true ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return (
    <UserProvider>
      <BrowserRouter>
      <ArtikalProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<LogInView />} >
              <Route path="/login" element={<LogInView />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </ThemeProvider></ArtikalProvider>

      </BrowserRouter>
    </UserProvider>




  );
};

export default App;


