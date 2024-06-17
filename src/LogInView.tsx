import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const LogInView = () => {
  const [checked, setChecked] = React.useState(true);

const navigate = useNavigate();
function handleNavigate(){
        navigate('/home');
}
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
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
         
          <Grid item xs={12}>
            <Button fullWidth onClick={handleNavigate}> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LogInView;
