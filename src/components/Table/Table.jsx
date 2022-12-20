import React from "react";
import "./table.css";
import { Paper } from "@mui/material";
const Table = ({ users, columns, isVisible }) => {
  return (
    <>
      <Paper elevation={6} variant="elevation" square>
        <table>
          <thead>
            <tr>
              {columns.map(
                (head, i) =>
                  head.includes("false") === false && <th key={i}>{head}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((row) => (
                <tr key={row.id}>
                  {columns.map(
                    (col, i) =>
                      col.includes("false") === false && (
                        <td key={i}>{row[col]}</td>
                      )
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </Paper>
    </>
  );
};

export default Table;
