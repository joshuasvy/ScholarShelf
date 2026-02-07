import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import NotificationCard from "../components/NotificationCard";

function Notification() {
  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>
      <main className="mt-10 md:mt-16 md:mb-16 max-w-7xl mx-auto px-4 md:px-14 lg:px-0">
        <div>
          <NotificationCard />
        </div>
      </main>
    </div>
  );
}

export default Notification;
