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
import { ArtikalProvider } from '../ArtikalContext';
import { UserProvider } from '../UserContext';
const Home = () => {
  const [checked, setChecked] = useState(true);

  return (
  <ArtikalProvider>
        <div style={{ padding: 30 }}>
      <AppBar position="static"  className='appBar'>
<Toolbar>
<Grid container wrap="wrap" className='appBarGrid'>
<Grid item>
<Typography variant="h6">{"Warehouse"}</Typography>
</Grid>
</Grid>
</Toolbar>
</AppBar>
<AddOptionView/>
<TableView/>
    </div>
    </ArtikalProvider>
  );
};

export default Home;
