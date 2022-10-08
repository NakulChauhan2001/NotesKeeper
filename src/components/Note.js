import React from "react";
import {
  Typography,
  Card,
  CardContent,
  IconButton,
  CardActions,
} from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note({ notes, title, description, deleteNote, setEdit }) {
  const handleEdit = (title) => {
    console.log("editing");
    setEdit(title);
  };
  return (
    <Card elevation={8}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" className="heading">
          Title
        </Typography>
        <Typography className="note_text">{title}</Typography>
        <Typography variant="h6" fontWeight="bold" className="heading">
          Description
        </Typography>
        <Typography className="note_text">{description}</Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "space-between",
        }}
      >
        <IconButton area-label="edit" onClick={() => handleEdit(title)}>
          <EditIcon />
        </IconButton>
        <IconButton area-label="delete" onClick={() => deleteNote(title)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Note;
