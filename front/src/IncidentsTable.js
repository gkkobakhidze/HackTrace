// src/components/IncidentsTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

const IncidentsTable = ({ incidents }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '95%', margin: 'auto' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Transaction</TableCell>
            <TableCell align="right">Sender</TableCell>
            <TableCell align="right">Recipient</TableCell>
            <TableCell align="right">Identified Hacker ID</TableCell>
            <TableCell align="right">Hack Methods</TableCell>
            <TableCell align="right">Related Domains</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow
              key={incident.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {truncateString(incident.id, 10)}
              </TableCell>
                <TableCell align="right">
                    
                <a target="_blank" href={`https://etherscan.io/tx/${incident.tx}`}>
                    {truncateString(incident.tx, 8)}
                </a>
                </TableCell>
              <TableCell align="right">{truncateString(incident.sender, 8)}</TableCell>
              <TableCell align="right">{truncateString(incident.recipient, 8)}</TableCell>
              <TableCell align="right">{incident.identified_hacker_id}</TableCell>
              <TableCell align="right">{incident.method_of_hack}</TableCell>
              <TableCell align="right">{incident.related_domain}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncidentsTable;
