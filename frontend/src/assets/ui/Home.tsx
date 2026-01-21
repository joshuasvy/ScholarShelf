import Button from "../components/Button";
import Header from "../components/Header";
import TrendingBooks from "../components/TrendingBooks";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import { books } from "../../../data/books";
import { testimonial } from "../../../data/testimonial";

function Home() {
  const topics = [...new Set(books.map((book) => book.topic))];
  return (
    <div className="h-full w-full bg-primary">
      <div className="mt-24">
        <Header />
      </div>
      <article className="flex flex-col justify-center items-center py-24">
        <h1 className="font-header mb-2">
          Discover Knowledge. Reserve Book Instantly.
        </h1>
        <p className="font-subheader mb-6 text-center">
          ScholarShelf helps you connects to a currated collection of <br />
          educational books— all available at your fingertips.
        </p>
        <Button
          text="Join us now"
          onClick={() => {}}
          className="w-86 h-14"
          textClassName="text-xl"
        />
      </article>
      <article className="bg-white flex flex-col items-center justify-center py-20">
        <div className="flex flex-row">
          <img
            src="/images/sections/sec-img-1.jpg"
            alt="Section Image 1"
            className="w-84 rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
          />
          <div className="flex flex-col justify-center mx-2 gap-2">
            <img
              src="/images/sections/sec-img-2.jpg"
              alt="Section Image 2"
              className="w-100 rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
            />
            <img
              src="/images/sections/sec-img-3.jpg"
              alt="Section Image 3"
              className="w-100 rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
            />
          </div>
          <img
            src="/images/sections/sec-img-4.jpg"
            alt="Section Image 4"
            className="w-84 h-auto rounded-md shadow-sm hover:scale-102 transition-transform duration-400 cursor-pointer"
          />
        </div>
        <div className="mt-12 text-center flex flex-col gap-2">
          <h1 className="font-inter font-semibold text-secondary text-xl italic tracking-wide">
            Bring people together through the shared love of books and stories.
          </h1>
          <p className="font-inter text-md font-medium">
            Where readers connect, share ideas, and grow through every page.
          </p>
        </div>
      </article>
      <article className="bg-primary flex flex-row justify-between py-20 px-42">
        <div className="flex flex-col gap-6">
          <h1 className="font-inter font-bold text-3xl">
            Broadening Access to Scholarly <br /> Knowledge
          </h1>
          <div className="flex flex-row items-center gap-4">
            <img
              src="/images/icons/academic.png"
              alt="Academic Icon"
              className="w-9 h-9"
            />
            <img
              src="/images/icons/architecture.png"
              alt="Architecture Icon"
              className="w-9 h-9"
            />
            <img
              src="/images/icons/literature.png"
              alt="Literature Icon"
              className="w-9 h-9"
            />
            <img
              src="/images/icons/astronomy.png"
              alt="Astronomy Icon"
              className="w-9 h-9"
            />
            <img
              src="/images/icons/biology.png"
              alt="Biology Icon"
              className="w-9 h-9"
            />
            <img
              src="/images/icons/history.png"
              alt="History Icon"
              className="w-9 h-9"
            />
          </div>
          <p className="font-inter">
            A diverse collection of academic works spanning literature, history,
            biology, astronomy, and <br />
            related disciplines supports rigorous study and intellectual
            exploration. Clear access to available <br />
            resources encourages informed engagement and fosters a structured,
            dependable learning <br />
            experience
          </p>
          <Button
            text="Browse now"
            onClick={() => {}}
            className="w-60 h-14 mt-2"
            textClassName="text-lg"
          />
        </div>
        <div>
          <img
            src="/images/sections/sec-3-img.jpg"
            alt="Section 3 Image"
            className="w-98 rounded-md shadow-sm hover:scale-102 hover:shadow-md transition-transform duration-400 cursor-pointer"
          />
        </div>
      </article>
      <article className="bg-white flex flex-col items-center justify-center pt-18 pb-8">
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
          <h1 className="font-header mb-6">Trusted by Readers and Learners</h1>
          <p className="font-inter text-md">
            Feedback from readers and learners highlights the importance of
            accessible resources and a well-organized <br /> reading experience
            in supporting effective academic engagement.
          </p>
        </div>
        <div className="flex flex-row gap-4">
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
