import React from "react";
import Note from "./Note";
import { Box, Typography, Grid } from "@mui/material/";

function NoteContainer({ notes, deleteNote, setEdit }) {
  return (
    <Box className="note-container" mt={4}>
      <Typography variant="h4" gutterBottom mb={4}>
        Notes
      </Typography>
      <Grid container columnSpacing={6} rowSpacing={3}>
        {Object.keys(notes)?.length > 0 ? (
          Object.keys(notes).map((title) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Note
                title={title}
                deleteNote={deleteNote}
                notes={notes}
                description={notes[title]}
                setEdit={setEdit}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No Notes present</Typography>
        )}
      </Grid>
    </Box>
  );
}

export default NoteContainer;
