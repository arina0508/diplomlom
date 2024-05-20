import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repetitors } from "./pages/Repetitors";
import { HowTheServiceWorks } from "./pages/HowTheServiceWorks";
import { Support } from "./pages/Support";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rep" element={<Repetitors />} />
      <Route path="/service" element={<HowTheServiceWorks />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
