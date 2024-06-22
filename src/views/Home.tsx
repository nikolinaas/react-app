import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  Grid,
  Paper,
  Button,
  Toolbar,
  Typography,
  AppBar,
  Modal,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from '@material-ui/core';
import { ArtikalContext, ArtikalProvider } from '../ArtikalContext';
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { ActionType } from '../Actions';
import { SearchProvider } from '../SearchContext';
import AddModal from './AddModal';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTxtField } from './StyledTxtField';
import ShowArtikalDeatils from './ShowArtikalView';



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
  const artikalContext = useContext(ArtikalContext);
  var searchedData: any = [];
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem('items')
    if (item != null) {
      setRows(JSON.parse(item));
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
  }, [])






  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () =>{
    setOpenEdit(true);
    console.log(artikalContext?.artikal);
  } 
  const handleCloseEdit = () => setOpenEdit(false);
  // search
  var searchBarValue: any;

  const [query, setQuery] = useState('');

  function handleSubmit() {
    const result = search(query);

  }

  const search = (query: any) => {
    var items = localStorage.getItem('items');
    var temporaryArray: any = [];
    var itemsToSearch = null;
    if (items != null) {
      itemsToSearch = JSON.parse(items);
      itemsToSearch.forEach((element: any) => {
        if (element.name.includes(searchBarValue) || element.description.includes(searchBarValue)) {
          console.log(element)
          temporaryArray.push(element);
        }
      });
    }
   setRows(temporaryArray);
  };

  //table
  const tableArticles = "tableArticles";

 

  function deleteArtikal(article: any) {

    let items = localStorage.getItem("items");
    let arrayItems = [];
    if (items != null) {
      arrayItems = JSON.parse(items);

    }
    arrayItems = arrayItems.filter((item: any) => item.artikalId !== article.artikalId);

    localStorage.setItem("items", JSON.stringify(arrayItems));
    setRows(arrayItems);


  }

  return (
    
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
            <form onSubmit={handleSubmit}>
              <StyledTxtField
                id="search-bar"
                className="text"
                label="Item name or description"
                variant="outlined"
                placeholder="Search..."
                size="small"
                value={searchBarValue}
                onChange={(event) => {
                  searchBarValue = event.target.value
                }}

              />
              <IconButton onClick={handleSubmit} aria-label="search">
                <SearchIcon></SearchIcon>
              </IconButton>
            </form>
            <Button className="buttonAdd" onClick={handleOpenAdd}><AddIcon></AddIcon>Add</Button>
            <Modal
              open={openAdd}
              onClose={handleCloseAdd}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <AddModal />
              </Box>
            </Modal>
          </div>
          <TableContainer component={Paper} className='tableContainer'>
            <Table key={tableArticles} className='table'>
              <TableHead className='tableHeadClass'>
                <TableRow>
                  <TableCell className='tableCellHeader' align="center">Name</TableCell>
                  <TableCell className='tableCellHeader' align="center">Amount</TableCell>
                  <TableCell className='tableCellHeader' align="center">Price</TableCell>
                  <TableCell className='tableCellHeader' align="center">Description</TableCell>
                  <TableCell className='tableCellHeader' align="center"> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className='tableBodyClass'>
                {rows.map((row: any) => (
                  <TableRow className='tableRowStyle' onClick={() => {
                    artikalContext?.dispatch({
                      type: ActionType.ON_SELECT_ARTIKAL,
                      payload: { artikalId: row.artikalId, name: row.name, amount: row.amount, price: row.price, description: row.description }
                    })
                    handleOpenEdit();
                    
                  }
                  }>
                    <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.name}</TableCell>
                    <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.amount}</TableCell>
                    <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.price}</TableCell>
                    <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.description}</TableCell>
                    <TableCell align="center"><Button className='buttonClass' onClick={() => deleteArtikal(row)}><DeleteIcon></DeleteIcon>Delete</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Modal
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ShowArtikalDeatils />
            </Box>
          </Modal>
        </div>
      </SearchProvider>
  );
};

export default Home;
