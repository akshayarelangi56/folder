import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

// The Table component now receives rows as a prop
export default function BasicTable({ rows }) {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", maxHeight: "250px", overflowY: "auto" }} // Added maxHeight and overflowY
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Time Stamps</TableCell> {/* Center-aligned heading */}
              <TableCell align="left">Delhi</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.timeStamp}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center"> {/* Center-aligned cell */}
                  {row.timeStamp}
                </TableCell>
                <TableCell align="left">{row.delhi}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                <button onClick={() => alert("Details clicked")} style={{ textDecoration: 'underline', color: 'blue', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                Details</button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
