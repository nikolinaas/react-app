import React, { useContext, useRef } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext, UserProvider } from '../UserContext';
import { StyledTxtField } from './StyledTxtField';
import LogInForm from './LogInForm';
const LogInView = () => {
 


  return (
    <UserProvider>
<div>
<LogInForm/>
</div>
   
    </UserProvider>
  );
}

export default LogInView;

