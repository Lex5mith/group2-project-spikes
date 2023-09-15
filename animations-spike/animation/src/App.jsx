import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hover from "./components/pages/Hover";
import Moves from "./components/pages/Moves";
import Moves2 from "./components/pages/Moves2";
import Typewriter from "./components/pages/Typerwriter";
import { Routes, Route } from "react-router-dom";
import Moves3 from "./components/pages/Moves3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* </Route> */}
      {/* <Typewriter />
      <Hover />
      <Moves /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Typewriter /> <Hover /> <Moves />
            </>
          }
        />
        <Route path="/2" element={<Moves2 />}></Route>
        <Route path="/3" element={<Moves3 />}></Route>
      </Routes>
    </>
  );
}

export default App;
