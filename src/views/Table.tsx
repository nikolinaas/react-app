import React, { useContext, useEffect, useState } from 'react';
import {
  Paper,
  Button,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,

} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { Artikal } from '../model/Artikal';
import { ArtikalContext } from '../ArtikalContext';
import { ActionType } from '../Actions';
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import ShowArtikalDeatil from './ShowArtikalView';

interface Props {
  data: any[]
  // any props that come into the component
}

const TableView = ({data}:Props) => {

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

  const tableArticles = "tableArticles";

  const artikalContext = useContext(ArtikalContext);

   var rows : any[] = [];


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log("+++++++++" + data);
  
      const item = localStorage.getItem('items')
      if (item) {
        rows = (data)
      }
    }


  , [])

  function deleteArtikal(article: any) {

    let items = localStorage.getItem("items");
    let arrayItems = [];
    if (items != null) {
      arrayItems = JSON.parse(items);

    }
    arrayItems = arrayItems.filter((item: any) => item.artikalId !== article.artikalId);

    localStorage.setItem("items", JSON.stringify(arrayItems));
    rows =(arrayItems);


  }
  if (!data || data.length == 0) {
    return <p>No data available</p>;
  }
  return (
    <div>
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
                handleOpen();
                artikalContext?.dispatch({
                  type: ActionType.ON_SELECT_ARTIKAL,
                  payload: { artikalId: row.artikalId, name: row.name, amount: row.amount, price: row.price, description: row.description }
                })
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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ShowArtikalDeatil />
        </Box>
      </Modal></div>
  );
};

export default TableView;
