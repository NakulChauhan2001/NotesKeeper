import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { darkTheme, lightTheme } from "./utilities/theme";
import { Navbar } from "./layouts/navbar";
import { Main } from "./pages/main";
import { NoteEdit } from "./pages/NoteEdit";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [edit, setEdit] = useState("");

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Paper sx={{ minHeight: "100vh" }}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        {edit.length > 0 ? (
          <NoteEdit current={edit} setEdit={setEdit} />
        ) : (
          <Main setEdit={setEdit} />
        )}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
