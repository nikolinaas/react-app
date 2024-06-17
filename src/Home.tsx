import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';
const Home = () => {
  const [checked, setChecked] = React.useState(true);



  return (
  
        <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Proba"></TextField>
          </Grid>
          
        </Grid>
      </Paper>
    </div>
    
  
  );
};

export default Home;
