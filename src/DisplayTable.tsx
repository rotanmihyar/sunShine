import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SchematizedItem from "./SchematizedItem";
import { Schema } from "./BackendRequests";
import { BackendDataRecord } from "./DataTypes";

type BackendData = { Data: BackendDataRecord[] };
export default function DisplayTable(rows: BackendData) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Schema.map((cell) => (
              <TableCell component="th" scope="row">
                {cell.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.Data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Schema.map((cell) => (
                <TableCell component="th" scope="row">
                  <SchematizedItem
                    value={row[cell.key].toString()}
                    type={cell.type}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
