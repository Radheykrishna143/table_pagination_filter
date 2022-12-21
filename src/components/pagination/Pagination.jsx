import React, { useState, useEffect } from "react";
import { Paper, Grid } from "@mui/material";
import Table from "../Table/Table";
import "./pagination.css";

const Pagination = ({ users, myCol, isVisible }) => {
  const [userPerPage, setuserPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, settableData] = useState();
  useEffect(() => {
    const indexOfLastPage = currentPage * userPerPage;
    const indexOfFirstPage = indexOfLastPage - userPerPage;
    let newTableData = users?.slice(indexOfFirstPage, indexOfLastPage);
    settableData(newTableData);
  }, [users, userPerPage, currentPage]);
  let pageNo = [];
  for (let i = 1; i <= Math.ceil(users?.length / userPerPage); i++) {
    pageNo.push(i);
  }
  const pagination = (n) => setCurrentPage(n);
  return (
    <>
      <Grid item xs={12}>
        <Table
          users={tableData?.length > 0 ? tableData : users}
          columns={myCol}
          isVisible={isVisible}
        />
      </Grid>
      <Paper className="paper" elevation={7}>
        {pageNo?.map((n, i) => (
          <a
            key={i}
            style={
              currentPage === i + 1
                ? {
                    backgroundColor: "#8585ad",
                    color: "white",
                    border: "2px solid black",
                  }
                : {}
            }
            onClick={() => pagination(n)}
          >
            {n}
          </a>
        ))}
      </Paper>
    </>
  );
};

export default Pagination;
