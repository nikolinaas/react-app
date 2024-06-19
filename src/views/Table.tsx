import React from 'react';
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


const rows: any[] = [
    { name : 'Artikal1', amount:20, price: 30, description:"Opis artikla1, malo detaljniji opis da vidim kako se ponasa kad je vise teksta"}
];

const TableView = () => {
  
  return (
    <TableContainer component={Paper}>
    <Table >
      <TableHead>
        <TableRow>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Amount</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow>
            <TableCell align="center" style={{overflow:'wrap', width:'20%'}}>{row.name}</TableCell>
            <TableCell align="center" style={{overflow:'wrap', width:'20%'}}>{row.amount}</TableCell>
            <TableCell align="center" style={{overflow:'wrap', width:'20%'}}>{row.price}</TableCell>
            <TableCell align="center"   style={{overflow:'wrap', width:'20%'}}>{row.description}</TableCell>
            <TableCell align="center"><Button className='buttonClass'><DeleteIcon></DeleteIcon>Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default TableView;
