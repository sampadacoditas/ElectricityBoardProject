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
// import KeepMountedModal from '../Delete/DeleteModal/DeleteModal';
import Delete from '../Delete/Delete';
import DeleteCustomer from '../Delete/Delete';
import KeepMountedModal from '../../../../Components/Modal/Modal';
// import KeepMountedModal from '../AddCustomerModal/AddCustomerModalModal';

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
  email: string,
  noOfMeter: number,
  typeOfMeter:any,
  action:any,
  edit:any
) {
  return { name, email, noOfMeter, typeOfMeter,action,edit };
}

const rows = [
  createData('sampada', "sampada@mail.com", 3,"solar",
  // <Button variant="text"onClick={()=> <KeepMountedModal/>}>Delete</Button>,
  <KeepMountedModal Component={<DeleteCustomer/>}heading={"Delete"}/>,
  <Button variant="text">Edit</Button>),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow sx={{marginTop:"0rem",paddingTop:"0rem"}}>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >No.of meter</StyledTableCell>
            <StyledTableCell >TypeOfMeter</StyledTableCell>
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
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.noOfMeter}</StyledTableCell>
              <StyledTableCell>{row.typeOfMeter}</StyledTableCell>
              <StyledTableCell>{row.action}</StyledTableCell>
              <StyledTableCell>{row.edit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}