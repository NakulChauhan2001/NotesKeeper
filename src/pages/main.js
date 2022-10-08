import React, { useEffect, useState } from "react";
import NoteContainer from "../components/NoteContainer";

import MediaCard from "../components/MediaCard";
import { Box } from "@mui/material";

export const Main = ({ setEdit }) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || {}
  );
  const deleteNote = (title) => {
    let obj = { ...notes };
    delete obj[title];
    setNotes(obj);
  };
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <Box
      sx={{
        padding: 8,
        minHeight: "calc(100vh - 5rem)",
        marginTop: "3rem",
      }}
    >
      <MediaCard notes={notes} setNotes={setNotes} />
      <NoteContainer notes={notes} deleteNote={deleteNote} setEdit={setEdit} />
    </Box>
  );
};
