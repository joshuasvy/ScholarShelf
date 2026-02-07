import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <section
        className="relative w-full h-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sections/about-hero-section.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 mt-18 hidden md:block md:px-18 lg:px-32">
          <Breadcrumb />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-10 lg:px-0">
          <h1 className="font-inter font-bold text-secondary italic tracking-wide text-center text-xl md:font-header mb-2">
            Connecting Readers to Scholarly Resources
          </h1>
          <p className="font-inter font-semibold text-white tracking-wide text-sm md:text-lg mb-6 text-center">
            Access academic books across disciplines and engage with knowledge
            through a clear and reliable reservation experience.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-14 md:py-24 px-4 md:px-18 lg:px-58">
        <h1 className="font-inter font-bold text-secondary text-center text-xl md:text-2xl tracking-wide mb-14">
          From Library Lines to Smarter Learning
        </h1>
        <div className="flex flex-col gap-8">
          <div className="font-inter text-md md:text-lg tracking-wide leading-relaxed">
            <p className="lg:flex lg:flex-row lg:gap-8">
              <img
                src="/images/sections/about-section-2-img-1.png"
                alt="Section 2"
                className="w-50 h-68 md:w-68 md:h-88 lg:w-96 lg:h-128 float-left lg:float-none lg:inline-block lg:align-top mr-5 mb-2 lg:mr-0 lg:mb-0 rounded-sm shadow-sm hover:scale-102 transition-transform duration-300 cursor-pointer"
              />
              Jacob was a third-year biology student juggling multiple courses,
              lab work, and his thesis research. Every week, he faced the same
              challenge: finding the books he needed in the crowded university
              library. Popular textbooks were always checked out, and long lines
              at the borrowing desk made it nearly impossible to plan his study
              time. On more than one occasion, he spent hours searching for
              references only to leave empty-handed, frustrated, and behind on
              deadlines. <br />
              <br />
              It wasn’t just Jacob. Students across disciplines experienced
              similar struggles, from literature majors hunting rare editions to
              history students trying to access archives. Researchers preparing
              lectures or reviewing materials for publications also faced
              delays, as essential resources were often unavailable when needed.
              The problem was clear: the traditional library system couldn’t
              keep up with the growing demand for academic resources, leaving
              students and educators stressed and slowing the pace of learning.
            </p>
          </div>
          <div>
            <img
              src="/images/sections/about-section-2-img-2.png"
              alt="Section 2"
              className="w-full h-46 md:h-88 rounded-sm shadow-md object-cover hover:scale-102 transition-transform duration-300 cursor-pointer mb-8"
            />
            <div className="font-inter text-justify text-md md:text-lg tracking-wide leading-relaxed">
              <p>
                These repeated struggles inspired the vision behind
                ScholarShelf. The idea was to create a platform that could
                organize library resources clearly, show what’s available, and
                allow users to reserve books in advance. By translating the
                chaotic experience of the library into a structured digital
                process, students like Jacob could finally plan their research
                and study efficiently. Educators and researchers could access
                resources reliably, ensuring their work progressed without
                unnecessary delays. <br />
                <br />
                Over time, ScholarShelf became more than just a tool—it
                symbolized a shift toward digital access and organized learning.
                By combining the convenience of online reservations with
                comprehensive coverage across literature, history, science, and
                beyond, it empowers students, educators, and researchers to
                focus on what truly matters: learning, teaching, and discovering
                knowledge. <br />
                <br />
                ScholarShelf is now a bridge between learners and resources,
                transforming the frustration of crowded libraries into a
                seamless, dependable academic experience, and ensuring that
                everyone has the tools to succeed.
              </p>
            </div>
            <Button
              text="Reserve Your First Book"
              className="py-2 md:py-4 my-4 md:my-8 tracking-wide"
              textClassName="text-md md:text-lg"
              next="/images/icons/arrow-right.png"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>
      <section className="bg-white flex items-center justify-center py-14 md:py-22 px-4 md:px-18 lg:px-58">
        <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h1 className="font-inter font-bold text-secondary text-center lg:text-left text-xl md:text-2xl tracking-wide">
              What is our Purpose?
            </h1>
            <div className="font-inter text-md md:text-lg text-justify tracking-wide leading-relaxed break-normal mt-4 md:mt-0">
              <p>
                <img
                  src="/images/sections/about-section-3.jpg"
                  alt="Section 3"
                  className="w-60 md:w-90 float-right lg:hidden ml-6 md:ml-7 md:mb-2 rounded-sm shadow-sm hover:scale-102 transition-transform duration-300 cursor-pointer"
                />
                ScholarShelf aims to support structured access to academic
                materials by simplifying the process of discovering and
                reserving books for study and research. <br /> <br />
                It encourages efficient resource use by providing clear
                visibility of book availability, allowing readers to plan their
                study and research activities with confidence and consistency.
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="/images/sections/about-section-3.jpg"
              alt="Section 3"
              className="w-126 hidden lg:block rounded-sm shadow-sm hover:scale-102 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-14 md:py-24 px-4 md:px-18 lg:px-58">
        <h1 className="font-inter font-bold text-center text-secondary text-xl md:text-2xl tracking-wide">
          Trusted by many researchers and educators
        </h1>
        <div className="flex flex-col gap-6 md:gap-18 mt-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <img
              src="/images/sections/testimonial-1.jpg"
              alt="Dr. Elena M. Torres"
              className="w-42 h-42 rounded-full shadow-sm object-cover"
            />
            <div className="font-inter text-lg tracking-wide space-y-8 px-4 md:px-0">
              <p className="text-justify">
                “The organized reservation process supports both students and
                educators by ensuring reliable access to academic resources,
                enabling more focused study, instruction, and research.”
              </p>
              <div className="flex flex-col gap-1 md:hidden">
                <p className="font-medium">— Dr. Elena M. Torres</p>
                <p className="text-placeholder">Educator and Researcher</p>
                <p className="font-medium mt-2">2020</p>
              </div>
              <p className="font-medium hidden md:block">
                — Dr. Elena M. Torres,{" "}
                <span className="text-placeholder font-regular">
                  Educator and Researcher
                </span>
                <p className="mt-2">2020</p>
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
            <div className="font-inter text-lg tracking-wide md:text-right space-y-8">
              <p className="text-justify px-4">
                “Students, researchers, and educators need a reliable way to
                access and reserve academic resources efficiently. This system
                meets that need by providing a clear, organized platform that
                simplifies discovery, planning, and study.”
              </p>
              <div className="flex flex-col gap-1 px-4 md:hidden">
                <p className="font-medium">— Joshua Cortez</p>
                <p className="text-placeholder">Software Developer</p>
                <p className="font-medium mt-2">2026</p>
              </div>
              <p className="font-medium hidden md:block">
                — Joshua Cortez,{" "}
                <span className="text-placeholder font-regular">
                  Software Developer
                </span>
                <p className="font-medium mt-2">2026</p>
              </p>
            </div>
            <img
              src="/images/sections/testimonial-2.png"
              alt="Joshua Cortez"
              className="w-42 h-42 rounded-full shadow-sm object-cover"
            />
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
