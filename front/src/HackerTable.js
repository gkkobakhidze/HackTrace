// src/components/IncidentsTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

const HackerTable = ({ hackers }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '95%', margin: 'auto' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Hacker ID</TableCell>
            <TableCell align="right">Incident Count</TableCell>
            <TableCell align="right">Known Hack Methods</TableCell>
            <TableCell align="right">Related Domains</TableCell>
            <TableCell align="right">Known Addresses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hackers.map((hacker) => (
            <TableRow
              key={hacker.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{hacker.id}</TableCell>
              <TableCell align="right">{hacker.incident_count}</TableCell>
              <TableCell align="right">{hacker.hack_methods}</TableCell>
              <TableCell align="right">{hacker.related_domains}</TableCell>
              <TableCell align="right">{truncateString(hacker.known_addresses, 8)}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HackerTable;
