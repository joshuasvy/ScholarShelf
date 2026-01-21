import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../ui/Home";
import Signup from "../ui/Signup";
import Signin from "../ui/Signin";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
