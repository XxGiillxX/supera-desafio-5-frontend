import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import defaultFetch from '../axios/config';
import "./Home.css";



const Home = () => {
  const [counts, setCounts] = useState([])

  const getCounts = async() => {
    try {
      const response = await defaultFetch.get("/transfers");
      const data = response.data;
      setCounts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getCounts()
  }, [])


  let totalAmount = 0;
  counts.forEach((count) => {
    totalAmount += count.value;
  });

  return (
    <div>
      <div>
        
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="justify">Saldo total: R$ {totalAmount.toLocaleString('pt-BR')}</TableCell>
            <TableCell align="justify">Saldo no período:{}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Nome Operador</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {counts.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
              {moment(row.transferDate).format('DD/MM/YYYY')}
              </TableCell>
              <TableCell align="center">{row.value.toLocaleString('pt-BR')}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.transactionOperator}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Home;