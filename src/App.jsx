import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repetitors } from "./pages/Repetitors";
import { HowTheServiceWorks } from "./pages/HowTheServiceWorks";
import { Support } from "./pages/Support";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "../server/AuthContext";
import { AuthProvider } from "../server/Login";
import { AuthProvider } from "../server/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/rep" element={<Repetitors />} />
          <Route path="/service" element={<HowTheServiceWorks />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
