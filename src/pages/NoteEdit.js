import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material/";

export const NoteEdit = ({ current, setEdit }) => {
  const [notes, setNotes] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("notes-app"));
    setNotes(obj);
    setTitle(current);
    setDescription(obj[current]);
  }, []);
  if (notes === 0) {
    return <p>Loading...</p>;
  }
  const handleSubmit = (title, description) => {
    if (title.length === 0) {
      alert("Title Should not be empty");
      return;
    }
    if (description.length === 0 && title.length <= 10) {
      alert(
        "Description should not be empty if title is less than 10 characters"
      );
      return;
    }
    let obj = { ...notes };
    delete obj[current];
    if (title in obj) {
      alert("Title already exist");
      return;
    }
    obj[title] = description;
    setNotes(obj);
    localStorage.setItem("notes-app", JSON.stringify(obj));
    setEdit("");
  };
  const handleCancel = () => {
    setEdit("");
  };
  return (
    <Box
      sx={{
        padding: 8,
        minHeight: "calc(100vh - 5rem)",
        marginTop: "3rem",
      }}
    >
      <Card sx={{ maxWidth: "24rem" }} elevation={8} px={4}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            sx={{
              my: 2,
            }}
          />
          <TextField
            id="standard-basic"
            label="Note"
            variant="standard"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => handleSubmit(title, description)}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
