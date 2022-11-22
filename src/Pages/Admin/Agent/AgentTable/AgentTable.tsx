import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TableFooter } from "@mui/material";
import KeepMountedModal from "../../../../Components/Modal/Modal";
import Delete from "../../Customer/Delete/Delete";
import DeleteIcon from "@mui/icons-material/Delete";
import EditUser from "../EditUser/EditUser";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id: any, name: string, email: any, action: any) {
  return { id, name, email, action };
}



export default function CustomizedTables({ rows, id }: any) {

  function onClick(props: any) {
    return props.id;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ marginTop: "0rem", paddingTop: "0rem" }}>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ fontSize: "1rem" }}>
          {rows?.map((row: any) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              {/* <StyledTableCell>{row.userId}</StyledTableCell> */}
              {/* <StyledTableCell>{row.id}</StyledTableCell>  */}
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  id={row.id}
                  sx={{ margin: "1rem" }}
                >
                  <KeepMountedModal
                    Component={<EditUser id={row.id} />}
                    heading={"EditUser"}
                    color={"red"}
                    sx={{ backgroundColor: "red", textAlign: "center" }}
                  />
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  id={row.id}
                >
                  <KeepMountedModal
                    Component={<Delete id={row.id} url={"user/"}/>}
                    heading={"Delete"}
                    color={"red"}
                    sx={{ backgroundColor: "red", textAlign: "center" }}
                  />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
