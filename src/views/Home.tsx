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
  AppBar,
  Modal,
  Box
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
import { SearchProvider } from '../SearchContext';
import SearchBar from './SearchForm';
import AddModal from './AddModal';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Home = () => {

  const { state } = useLocation();
  const user = state;
 const userContext = useContext(UserContext);
 
 var  searchedData :any = [];

  useEffect(() => {
    const item = localStorage.getItem('items')
    if (item!=null) {
      console.log(item)
      searchedData =JSON.parse(item);
      console.log(searchedData)
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






const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

return (
  <ArtikalProvider>
    <SearchProvider >
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
      <div className="addDiv">
<SearchBar />
<Button className="buttonAdd" onClick={handleOpen}><AddIcon></AddIcon>Add</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <AddModal/>
  </Box>
</Modal>
</div>
      <TableView data={searchedData}/>
    </div>
    </SearchProvider>
  </ArtikalProvider>
);
};

export default Home;
