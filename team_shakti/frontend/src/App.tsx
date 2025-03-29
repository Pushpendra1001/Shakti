import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comp/Home";
import Dashboard from "./Comp/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
