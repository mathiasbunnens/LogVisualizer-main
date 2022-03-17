import { useState } from "react";
import LogVisualizer from "./components/LogVisualizer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LogVisualizer />
    </div>
  );
}

export default App;
