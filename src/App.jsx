import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repetitors } from "./pages/Repetitors";
import { HowTheServiceWorks } from "./pages/HowTheServiceWorks";
import { Support } from "./pages/Support";
import { Profile } from "./pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rep" element={<Repetitors />} />
      <Route path="/service" element={<HowTheServiceWorks />} />
      <Route path="/support" element={<Support />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
