import Button from "../components/Button";
import Header from "../components/Header";
import TrendingBooks from "../components/TrendingBooks";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import { trendingBooks } from "../../../data/trendingBooks";
import { testimonial } from "../../../data/testimonial";

function Home() {
  const topics = [...new Set(trendingBooks.map((book) => book.topic))];
  return (
    <div className="min-h-screen w-full bg-primary">
      <Header />
      <article className="flex flex-col justify-center items-center py-10 md:py-24 px-6 md:px-0">
        <h1 className="font-inter font-bold text-secondary italic tracking-wide text-center text-xl md:font-header mb-2">
          Discover Knowledge. Reserve Book Instantly.
        </h1>
        <p className="font-inter font-semibold tracking-wide text-sm md:font-subheader mb-6 text-center">
          ScholarShelf helps you connects to a currated collection of
          educational books— all available at your fingertips.
        </p>
        <Button
          text="Join us now"
          onClick={() => {}}
          className="w-56 h-10 md:w-80 md:h-13"
          textClassName="text-md md:text-xl"
        />
      </article>
      <article className="bg-white flex flex-col items-center justify-center py-12 md:py-20">
        <div className="flex flex-row">
          <img
            src="/images/sections/sec-img-1.jpg"
            alt="Section Image 1"
            className="max-w-26 sm:max-w-20 md:max-w-50 lg:max-w-84 rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
          />
          <div className="flex flex-col justify-center mx-2 gap-2">
            <img
              src="/images/sections/sec-img-2.jpg"
              alt="Section Image 2"
              className="max-w-38 sm:max-w-28 md:max-w-70 lg:max-w-100 rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
            />
            <img
              src="/images/sections/sec-img-3.jpg"
              alt="Section Image 3"
              className="max-w-38 sm:max-w-28 md:max-w-70 lg:max-w-100 rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
            />
          </div>
          <img
            src="/images/sections/sec-img-4.jpg"
            alt="Section Image 4"
            className="max-w-26 sm:max-w-20 md:max-w-50 lg:max-w-84 h-auto rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
          />
        </div>
        <div className="mt-12 text-center flex flex-col gap-2 px-6 md:px-0">
          <h1 className="font-inter font-semibold text-secondary text-lg sm:text-md md:text-xl italic tracking-wide">
            Bring people together through the shared love of books and stories.
          </h1>
          <p className="font-inter text-md font-medium">
            Where readers connect, share ideas, and grow through every page.
          </p>
        </div>
      </article>
      <article className="bg-primary flex justify-center py-10 md:py-20 px-6 sm:px-6 md:px-20 lg:px-42">
        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-6">
          <div className="order-1 md:order-2 relative">
            <img
              src="/images/sections/sec-3-img.jpg"
              alt="Section 3 Image"
              className="w-full h-68 object-cover md:w-90 md:h-full lg:w-98 lg:h-auto mt-8 md:mt-0 md:shadow-md rounded-t-md md:rounded-md cursor-pointer md:hover:scale-102 transition-transform duration-400"
            />
            <div className="flex md:hidden absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-primary to-transparent"></div>
            <h1 className="absolute bottom-0 font-inter font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl px-2 md:hidden">
              Broadening Access to Scholarly <br /> Knowledge
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-inter font-bold text-xl md:text-2xl lg:text-3xl hidden md:block mb-2">
              Broadening Access to Scholarly <br /> Knowledge
            </h1>
            <div className="flex flex-row items-center gap-3 md:gap-4">
              <img
                src="/images/icons/academic.png"
                alt="Academic Icon"
                className="w-7 h-7 sm:w-7 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              />
              <img
                src="/images/icons/architecture.png"
                alt="Architecture Icon"
                className="w-7 h-7 sm:w-7 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              />
              <img
                src="/images/icons/literature.png"
                alt="Literature Icon"
                className="w-7 h-7 sm:w-7 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              />
              <img
                src="/images/icons/astronomy.png"
                alt="Astronomy Icon"
                className="w-7 h-7 sm:w-7 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              />
              <img
                src="/images/icons/biology.png"
                alt="Biology Icon"
                className="w-7 h-7 sm:w-7 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              />
              <img
                src="/images/icons/history.png"
                alt="History Icon"
                className="w-7 h-7 sm:w-7 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              />
            </div>
            <p className="font-inter leading-relaxed max-w-prose text-sm md:text-base lg:text-lg">
              A diverse collection of academic works spanning literature,
              history, biology, astronomy, and related disciplines supports
              rigorous study and intellectual exploration. Clear access to
              available resources encourages informed engagement and fosters a
              structured, dependable learning experience
            </p>
            <Button
              text="Browse now"
              onClick={() => {}}
              className="w-48 h-12"
              textClassName="text-md md:text-lg"
            />
          </div>
        </div>
      </article>
      <article className="bg-white flex flex-col items-center justify-center pt-18 pb-8 md:px-12">
        <div>
          <h1 className="font-inter font-bold text-2xl">
            Trending Book on ScholarShelf
          </h1>
          {topics.map((topic) => (
            <div key={topic}>
              <div className="flex flex-row gap-2 items-center mb-6 mt-6 ml-4">
                <img
                  src={`/images/icons/${topic.toLowerCase()}.png`}
                  alt={`${topic} Icon`}
                  className="w-7"
                />
                <h2 className="font-inter font-bold text-lg">{topic}</h2>
              </div>
              <TrendingBooks topic={topic} />
            </div>
          ))}
        </div>
        <button className="flex flex-row items-center justify-center gap-2 mt-18 hover:underline decoration-secondary cursor-pointer">
          <p className="font-inter text-xl font-bold text-secondary">More</p>
          <img src="/images/icons/next.png" alt="Next Icon" className="w-7" />
        </button>
      </article>
      <article className="bg-primary py-20 flex flex-col justify-center items-center gap-14">
        <div className="text-center">
          <h1 className="font-inter text-2xl text-secondary font-bold italic tracking-wide md:font-header mb-6 px-4 md:px-0">
            Trusted by Readers and Learners
          </h1>
          <p className="font-inter text-md break-normal px-4">
            Feedback from readers and learners highlights the importance of
            accessible resources and a well-organized <br /> reading experience
            in supporting effective academic engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-4">
          {testimonial.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              profile={testimonial.profile}
              name={testimonial.name}
              role={testimonial.role}
              message={testimonial.message}
              date={testimonial.date}
            />
          ))}
        </div>
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
