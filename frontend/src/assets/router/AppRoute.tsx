import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../ui/Home";
import Signup from "../ui/Signup";
import Signin from "../ui/Signin";
import Books from "../ui/Books";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
