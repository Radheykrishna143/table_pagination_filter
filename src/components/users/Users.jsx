import { Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import api from "../axios/axios";
import ColumnFilter from "../columnfilter/ColumnFilter";

const Users = () => {
  const [user, setuser] = useState();
  const columns = ["id", "name", "username", "email", "phone"];
  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get();
      setuser(data);
    };
    getData();
  }, []);

  return (
    <>
      <Typography variant="h6" textAlign="center" color="secondary">
        RadheyKrishna_Table
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <ColumnFilter
            users={user}
            columns={columns}
            setuser={() => setuser()}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Users;
