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
  const [checked, setChecked] = React.useState(true);

  const navigate = useNavigate();
  function handleSubmit() {
    console.log(userContext);
  // navigate('/home');
  }

  function setState(parameter: any) {

  }
  const userContext = useContext(UserContext);
  return (
    <UserProvider>
<div>
<LogInForm/>
</div>
   
    </UserProvider>
  );
}

export default LogInView;

