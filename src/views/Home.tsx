import React, { useContext, useEffect, useReducer, useState } from 'react';
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
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { ActionType } from '../Actions';
import userReducer from '../reducers/UserReducer';
import { initialState } from '../model/User';
const Home = () => {

  const { state } = useLocation();
  const user = state;
  const [rowsForTable, setRowsForTable] = useState([]);
 const userContext = useContext(UserContext);
 


  useEffect(() => {
    const item = localStorage.getItem('items')
    if (item) {
      setRowsForTable(JSON.parse(item));
      console.log(rowsForTable)
    }
 
    userContext?.dispatch({
      type: ActionType.ON_CHANGE_USER,
      payload: {
          username: "vvvvvv",
          password: "vvvvvv",
          name: "vvvvvv",
          surname: "vvvvvv",
          age: 0
      }
  })
    console.log(userContext)
},[])

return (
  <ArtikalProvider>
    <div style={{ padding: 30 }}>
      <AppBar position="static" className='appBar'>
        <Toolbar>
          <Grid container wrap="wrap" className='appBarGrid'>
            <Grid item className='userInfo'>
              <Typography variant="h6">{"Warehouse"}</Typography>
              <div className='divUserInfo'><PersonIcon></PersonIcon>{user?.user?.name} {user?.user.surname}</div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AddOptionView />
      <TableView />
    </div>
  </ArtikalProvider>
);
};

export default Home;
