import { useReservations } from "../../hooks/useReservations";
import type { ReservationInterface } from "../../types/type";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BooksCard from "../components/BooksCard";
import Footer from "../components/Footer";

function Reservation() {
  const { reservations, loading, error } = useReservations();

  const requestedBooks = reservations.filter(
    (r) => r.status === "Pending" || r.status === "Approved",
  );

  const previousReservations = reservations.filter(
    (r) => r.status === "Returned" || r.status === "Cancelled",
  );

  if (loading) return <p>Loading Books...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>
      <main className="mt-10 md:mt-0 md:mb-16 max-w-7xl mx-auto">
        <div className="px-4 md:px-14 lg:px-0">
          <section className="mt-16">
            <div className="flex justify-between items-center">
              <h2 className="font-inter font-bold text-2xl">Requested Books</h2>
              <a
                href=""
                className="font-inter text-md text-secondary font-semibold underline"
              >
                View more
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 justify-items-center">
              {requestedBooks.length === 0 ? (
                <p className="col-span-full font-inter text-center text-gray-500">
                  You have no active reservations.
                </p>
              ) : (
                requestedBooks.map((reservation: ReservationInterface) => (
                  <BooksCard key={reservation.id} book={reservation} />
                ))
              )}
            </div>
          </section>
          <section className="mt-16">
            <div className="flex justify-between items-center">
              <h2 className="font-inter font-bold text-2xl">
                Previous Reservations
              </h2>
              <a
                href=""
                className="font-inter text-md text-secondary font-semibold underline"
              >
                View more
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 justify-items-center">
              {previousReservations.length === 0 ? (
                <p className="col-span-full font-inter text-center text-gray-500">
                  You have no recent reservations.
                </p>
              ) : (
                previousReservations.map(
                  (reservation: ReservationInterface) => (
                    <BooksCard key={reservation.id} book={reservation} />
                  ),
                )
              )}
            </div>
          </section>
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default Reservation;
