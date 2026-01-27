import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../ui/Home";
import Signup from "../ui/Signup";
import Signin from "../ui/Signin";
import Books from "../ui/Books";
import BookDetails from "../ui/BookDetails";
import Catalog from "../ui/Catalog";
import Reservation from "../ui/Reservation";
import About from "../ui/About";
import Profile from "../ui/Profile";
import Wishlist from "../ui/Wishlist";
import Notification from "../ui/Notification";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<Books />} />
        <Route path="/book/details" element={<BookDetails />} />
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
