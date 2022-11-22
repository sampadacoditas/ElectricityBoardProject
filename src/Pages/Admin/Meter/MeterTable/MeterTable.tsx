import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  faultTolerance: string,
  cost: number,
  noOfReading: number,
  photos: number,
  action:any,
  edit:any
) {
  return { name, faultTolerance, cost, noOfReading, photos,action,edit };
}

const rows = [
  createData('solar', "5", 2, 24, 4.0,<Button variant="text">Delete</Button>,<Button variant="text">Edit</Button>),
//   createData('household', "237", 9.0, 37, 4.3),
//   createData('industrial', "262", 16.0, 24, 6.0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow sx={{marginTop:"0rem",paddingTop:"0rem"}}>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >faultTolerance</StyledTableCell>
            <StyledTableCell >cost/unit</StyledTableCell>
            <StyledTableCell >noOfReading</StyledTableCell>
            <StyledTableCell >photos</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
            <StyledTableCell >Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{fontSize:"1rem"}}>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.faultTolerance}</StyledTableCell>
              <StyledTableCell>{row.cost}</StyledTableCell>
              <StyledTableCell>{row.noOfReading}</StyledTableCell>
              <StyledTableCell>{row.photos}</StyledTableCell>
              <StyledTableCell>{row.action}</StyledTableCell>
              <StyledTableCell>{row.edit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}