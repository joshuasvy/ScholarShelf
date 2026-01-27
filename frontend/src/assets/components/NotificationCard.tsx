export default function NotificationCard() {
  return (
    <div className="w-full h-auto bg-white p-6 flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between mb-2 mt-2">
        <h1 className="font-inter font-bold text-xl md:text-2xl">
          Notification
        </h1>
        <button className="flex flex-row gap-4 items-center cursor-pointer">
          <p className="font-inter font-medium">Mark all as read</p>
          <img
            src="/images/icons/mark-as-read.png"
            alt="Mark as read"
            className="w-6 hover:rotate-360 transition-all duration-300"
          />
        </button>
      </div>
      <div>
        <button className="w-full h-full flex flex-row gap-8 cursor-pointer bg-yellow-50 p-6 rounded-md hover:bg-white hover:scale-102 transition-all duration-300">
          <div>
            <img
              src="/images/books/architecture-book-4.png"
              alt="Book Cover"
              className="w-30 md:w-32 rounded-sm shadow-md"
            />
          </div>
          <div className="flex flex-col items-start font-inter gap-2 text-md text-left">
            <h1 className="text-xl md:text-2xl font-bold">
              Robet Maillart's Bridges
            </h1>
            <p className="font-medium">David P. Billington</p>
            <p className="hidden md:block font-medium">2020</p>
            <p className="w-45 md:w-110 lg:w-255 mt-1 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </button>
      </div>
      <div className="w-full h-1 rounded bg-placeholder mt-4"></div>
    </div>
  );
}
