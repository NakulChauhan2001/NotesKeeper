import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material/";

export default function MediaCard({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

    if (title in notes) {
      alert("Title already exist");
      return;
    }
    let obj = { ...notes };
    obj[title] = description;
    setNotes(obj);
    setTitle("");
    setDescription("");
  };

  return (
    <Card sx={{ maxWidth: "24rem" }} elevation={8} px={4}>
      <CardContent
        sx={{
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
      <CardActions px={6}>
        <Button
          size="small"
          variant="contained"
          onClick={() => handleSubmit(title, description)}
        >
          Add a Note
        </Button>
      </CardActions>
    </Card>
  );
}
