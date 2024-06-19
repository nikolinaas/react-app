import React, { useEffect, useState } from 'react';
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




const TableView = () => {

  const tableArticles  = "tableArticles";

  const [rows, setRows] = useState([])

  useEffect(() => {
    const item = localStorage.getItem('items')
    if (item) {
    setRows( JSON.parse(item))}

     
  },[])

function deleteArtikal(article:any){

  let items = localStorage.getItem("items");
  let arrayItems = [];
  if(items!=null){
    arrayItems=JSON.parse(items);
    
  }
  arrayItems = arrayItems.filter((item:any) => item.artikalId !== article.artikalId) ;

    localStorage.setItem("items", JSON.stringify(arrayItems));
    setRows(arrayItems);
  

}

  return (
    <TableContainer component={Paper}>
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
            <TableRow>
              <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.name}</TableCell>
              <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.amount}</TableCell>
              <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.price}</TableCell>
              <TableCell align="center" style={{ overflow: 'wrap', width: '20%' }}>{row.description}</TableCell>
              <TableCell align="center"><Button className='buttonClass' onClick={()=>deleteArtikal(row)}><DeleteIcon></DeleteIcon>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
