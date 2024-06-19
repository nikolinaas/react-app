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
import { UserContext } from '../UserContext';
import { StyledTxtField } from './StyledTxtField';
const LogInView = () => {
  const [checked, setChecked] = React.useState(true);

  const navigate = useNavigate();
  function handleSubmit() {
    navigate('/home');
  }

  function setState(parameter: any) {

  }
  const userContext = useContext(UserContext);
  return (
    <div>

      <Grid container spacing={0} className="main-grid" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={2}
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <StyledTxtField
                        type="text"
                        placeholder="Username"
                        fullWidth
                        name="username"
                        variant="outlined"
                        value={userContext?.user.username}
                        onChange={(event) =>
                          setState({
                            [event.target.name]: event.target.value,
                          })
                        }
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <StyledTxtField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        value={userContext?.user.username}
                        onChange={(event) =>
                          setState({
                            [event.target.name]: event.target.value,
                          })
                        }
                        required
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogInView;

