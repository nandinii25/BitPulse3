import React, { useState } from "react";
import "./styles.css";

import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "var(--dark-grey) !important",
            border: "1px solid var(--black)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "var(--black) !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--red)",
            borderColor: "var(--black)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
