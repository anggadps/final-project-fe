import axios from "axios";
import React from "react";
import { Button } from "@mui/material";

function ActionDelete({ id }) {
  const deleteCourse = () => {
    axios
      .delete(process.env.REACT_APP_API_URL + `/Course?id=${id}`)
      .then((response) => {
        // refresh the course list
        console.log("Course deleted successfully.");
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting course:", error);
      });
  };
  return (
    <div>
      <Button
        sx={{ width: 155, mx: 0 }}
        variant="contained"
        color="error"
        onClick={deleteCourse}
      >
        Delete
      </Button>
    </div>
  );
}

export default ActionDelete;
