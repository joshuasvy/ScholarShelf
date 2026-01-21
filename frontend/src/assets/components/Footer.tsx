export default function Footer() {
  return (
    <div className="w-full max-h-92 bg-secondary flex flex-col justify-center items-center pt-16 pb-8">
      <img
        src="/images/logo/scholarshelf-logo-white.png"
        alt="ScholarShelf Logo"
        className="w-52 cursor-pointer"
      />
      <p className="font-inter text-white font-medium text-center mt-8">
        ScholarShelf — A collaborative space to explore knowledge, exchange
        ideas, and support continuous learning and intellectual growth.{" "}
      </p>
      <nav>
        <ul className="flex flex-row gap-6 font-regular text-white font-medium mt-8">
          <li className="underline">
            <a href="/">Home</a>
          </li>
          <li>•</li>
          <li className="underline">
            <a href="/book">Books</a>
          </li>
          <li>•</li>

          <li className="underline">
            <a href="/catalog">Catalog</a>
          </li>
          <li>•</li>

          <li className="underline">
            <a href="/reservation">Reservations</a>
          </li>
          <li>•</li>
          <li className="underline">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row items-center gap-2 mt-6">
        <img src="/images/icons/email.png" alt="Email Icon" className="w-6" />
        <p className="font-regular text-white">scholarshelf@gmail.com</p>
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
      <div className="flex flex-row items-center mt-8">
        <p className="font-regular text-white">© 2026 All Rights Reserved.</p>
      </div>
    </div>
  );
}
