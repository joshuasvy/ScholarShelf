export default function Footer() {
  return (
    <div className="w-full h-auto bg-secondary flex flex-col justify-center items-start md:items-center pt-8 md:pt-16 pb-8 px-4 md:px-0">
      <img
        src="/images/logo/scholarshelf-logo-white.png"
        alt="ScholarShelf Logo"
        className="w-54 md:w-52 cursor-pointer my-6 md:my-0"
      />
      <p className="font-inter text-white font-medium text-lg md:text-base md:text-center mt-6 md:mt-8 break-normal ">
        ScholarShelf — A collaborative space to explore knowledge, exchange
        ideas, and support continuous learning and intellectual growth.{" "}
      </p>
      <nav>
        <ul className="flex flex-col md:flex-row gap-6 text-lg md:font-regular font-medium mt-12 md:mt-8">
          <li className="underline text-white">
            <a href="/">Home</a>
          </li>
          <li className="hidden md:block text-white">•</li>
          <li className="underline text-white">
            <a href="/book">Books</a>
          </li>
          <li className="hidden md:block text-white">•</li>

          <li className="underline text-white">
            <a href="/catalog">Catalog</a>
          </li>
          <li className="hidden md:block text-white">•</li>

          <li className="underline text-white">
            <a href="/reservation">Reservations</a>
          </li>
          <li className="hidden md:block text-white">•</li>
          <li className="underline text-white">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row items-center mt-10 md:mt-6">
        <div className="flex gap-2">
          <img src="/images/icons/email.png" alt="Email Icon" className="w-6" />
          <p className="font-regular text-white">scholarshelf@gmail.com</p>
        </div>

        <div className="flex flex-row gap-3 ml-6">
          <img
            src="/images/icons/facebook.png"
            alt="Facebook Icon"
            className="w-6"
          />
          <img
            src="/images/icons/instagram.png"
            alt="Instagram Icon"
            className="w-6"
          />
          <img
            src="/images/icons/twitter.png"
            alt="Twitter Icon"
            className="w-6"
          />
          <img
            src="/images/icons/whatsapp.png"
            alt="WhatsApp Icon"
            className="w-6"
          />
        </div>
      </div>
      <div className="mt-12 flex self-center">
        <p className="font-regular text-white">© 2026 All Rights Reserved.</p>
      </div>
    </div>
  );
}
