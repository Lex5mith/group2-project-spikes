import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { ModeContext } from "./context/Mode.jsx";
import { Paper } from "@mui/material";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import TutorialPage from "./pages/TutorialPage";
import GamePage from "./pages/GamePage";
import GamePageGrid from "./pages/GamePageGrid";

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <ThemeProvider theme={mode}>
        <Paper
          sx={{
            minHeight: "100vh",
            borderRadius: 0,
          }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tutorial" element={<TutorialPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/game-grid" element={<GamePageGrid />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
