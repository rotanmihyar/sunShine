import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SchematizedItem from "./SchematizedItem";

import { ItemStrucutreList } from "./DataTypes";

type DisplayTableProps<T> = { data: T[]; schema: ItemStrucutreList<T> };
export default function DisplayTable<T>(props: DisplayTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.schema.map((cell) => (
              <TableCell component="th" scope="row">
                {cell.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {props.schema.map((cell) => (
                <TableCell component="th" scope="row">
                  <SchematizedItem
                    value={String(row[cell.key])}
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
