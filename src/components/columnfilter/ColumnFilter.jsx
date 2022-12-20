import { Grid, TextField, InputAdornment } from "@mui/material";
import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const ColumnFilter = ({ users, columns }) => {
  const [q, setQ] = useState("");
  const [tableData, settableData] = useState();
  const [myCol, setmyCol] = useState([...columns]);
  const [isVisible, setisVisible] = useState(false);
  useEffect(() => {
    const search = (data) => {
      let filteredData = data;
      filteredData = data?.filter((v) =>
        myCol.some((s) => v[s]?.toString().toLowerCase().includes(q.toString()))
      );
      settableData(filteredData);
    };
    search(users);
  }, [q, tableData]);
  return (
    <>
      <Grid container gap={2}>
        <Grid item xs={12}>
          {columns?.map((r, i) => (
            <label key={Math.random()}>
              {r}{" "}
              <input
                type="checkbox"
                checked={myCol.includes(r)}
                onChange={(e) => {
                  let checked = myCol.includes(r);
                  if (checked) {
                    let filterCol = [...myCol];
                    filterCol[i] = r + isVisible;
                    setmyCol(filterCol);
                  } else {
                    let filterCol = [...myCol];
                    filterCol[i] = r.replace("@", "");
                    setmyCol(filterCol);
                  }
                }}
              />
            </label>
          ))}
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="text"
            label="search your result"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <Table
            users={tableData ? tableData : users}
            columns={myCol}
            isVisible={isVisible}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ColumnFilter;
