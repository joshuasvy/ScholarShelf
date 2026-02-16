import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import Catalog from "../pages/Catalog";
import Reservation from "../pages/Reservation";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Wishlist from "../pages/Wishlist";
import Notification from "../pages/Notification";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<Books />} />
        <Route path="/book/details/:id" element={<BookDetails />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
