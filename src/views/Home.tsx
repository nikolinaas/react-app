import React, { useState } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Toolbar,
  Typography,
  AppBar
} from '@material-ui/core';
import Table from './Table';
import TableView from './Table';
import AddOptionView from './AddOptionView';
const Home = () => {
  const [checked, setChecked] = useState(true);

  return (
  
        <div style={{ padding: 30 }}>
      <AppBar position="static"  className='appBar'>
<Toolbar>
<Grid container justify="center" wrap="wrap">
<Grid item>
<Typography variant="h6">{"Warehouse"}</Typography>
</Grid>
</Grid>
</Toolbar>
</AppBar>
<AddOptionView/>
<TableView/>
    </div>
    
  
  );
};

export default Home;
