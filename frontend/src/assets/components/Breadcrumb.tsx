import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const labels: Record<string, string> = {
    home: "Home",
    book: "Books",
    catalog: "Catalog",
    reservation: "Reservations",
    about: "About",
  };

  return (
    <nav className="text-sm text-placeholder mb-4">
      <ol className="list-none p-0 inline-flex">
        <li>
          <Link to="/home" className="underline">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const label =
            labels[name] ||
            name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

          return (
            <li
              key={index}
              className="flex items-center text-placeholder font-inter"
            >
              <span className="mx-4">{">"}</span>
              {isLast ? (
                <span className="underline">{label}</span>
              ) : (
                <Link to={routeTo} className="underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
