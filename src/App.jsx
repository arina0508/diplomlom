import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repetitors } from "./pages/Repetitors";
import { HowTheServiceWorks } from "./pages/HowTheServiceWorks";
import { Support } from "./pages/Support";
import { Profile } from "./pages/Profile";
import { BeRepetitor } from "./pages/BeRepetitor";
import { RepetitorMore } from "./pages/RepetitorMore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/rep" element={<Repetitors />} />
      <Route path="/service" element={<HowTheServiceWorks />} />
      <Route path="/support" element={<Support />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/berep" element={<BeRepetitor />} />
      <Route path="/" element={<Repetitors />} />
      <Route path="/repmore/:repetitorId" element={<RepetitorMore />} />
    </Routes>
  );
}

export default App;
