import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-primary shadow-xl">
      <div className="flex justify-between items-center px-4 sm:px-4 md:px-8 lg:px-32 h-22">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 lg:gap-14">
          <img
            src="/images/logo/scholarshelf-logo-blue.png"
            alt="ScholarShelf Logo"
            className="w-34 sm:w-32 lg:w-36 cursor-pointer transition-transform duration-300 hover:scale-105"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex gap-4 sm:gap-4 md:gap-6 lg:gap-12 text-black font-inter font-semibold text-base sm:text-md md:text-base lg:text-md">
              {[
                { label: "Home", path: "home" },
                { label: "Books", path: "book" },
                { label: "Catalog", path: "catalog" },
                { label: "Reservations", path: "reservation" },
                { label: "About", path: "about" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={`/${item.path}`} className="relative group">
                    {item.label}
                    <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-secondary transition-transform duration-300 scale-x-0 origin-right group-hover:scale-x-100"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right-side Icons (desktop only) */}
        <div className="hidden md:flex gap-2 md:gap-3 lg:gap-4 items-center">
          <img
            src="/images/icons/wishlist-header.png"
            alt="Wishlist"
            className="w-3 sm:w-4 md:w-5 lg:w-6 cursor-pointer"
          />
          <img
            src="/images/icons/notification.png"
            alt="Notification"
            className="w-4 sm:w-5 md:w-6 lg:w-7 cursor-pointer"
          />
          <img
            src="/images/icons/user.png"
            alt="Profile"
            className="w-7 sm:w-8 md:w-9 lg:w-10 cursor-pointer"
          />
        </div>

        {/* Hamburger (mobile only) */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <img
              src="/images/icons/close.png"
              alt="Close Icon"
              className="w-8 mr-8 cursor-pointer transition-all duration-300 hover:rotate-90"
            />
          ) : (
            <div className="flex items-center gap-3">
              <img
                src="/images/icons/wishlist-header.png"
                alt="Wishlist Icon"
                className="w-5 cursor-pointer"
              />
              <img
                src="/images/icons/notification.png"
                alt="Notification Icon"
                className="w-6 cursor-pointer"
              />
              <img
                src="/images/icons/user.png"
                alt="User Icon"
                className="w-7 cursor-pointer"
              />
              <div>
                <img
                  src="/images/icons/menu-bar.png"
                  alt="Menu Icon"
                  className="w-8 cursor-pointer"
                />
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-primary text-black font-inter text-lg font-medium flex flex-col gap-2 transition-all duration-300 fixed left-0 w-full h-[calc(100vh-5rem)] ${menuOpen ? "block" : "hidden"}`}
      >
        <a href="/" className="hover:bg-secondary rounded-md p-3 mt-4">
          Home
        </a>
        <a href="/book" className="hover:bg-secondary rounded-md p-3">
          Books
        </a>
        <a href="/catalog" className="hover:bg-secondary rounded-md p-3">
          Catalog
        </a>
        <a href="/reservation" className="hover:bg-secondary rounded-md p-3">
          Reservations
        </a>
        <a href="/about" className="hover:bg-secondary rounded-md p-3">
          About
        </a>
      </nav>
    </header>
  );
}
