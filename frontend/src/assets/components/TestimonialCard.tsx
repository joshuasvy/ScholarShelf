interface TestimonialCardProps {
  profile: string;
  name: string;
  role: string;
  message: string;
  date: string;
}

export default function TestimonialCard({
  profile,
  name,
  role,
  message,
  date,
}: TestimonialCardProps) {
  return (
    <div className="max-w-78 md:max-w-98 h-auto bg-white flex flex-col md:flex-row justify-between gap-4 md:gap-6 p-4 rounded-md shadow-md mx-4 md:mx-0 hover:-translate-y-3  transition-translate duration-300 cursor-pointer">
      <div className="flex justify-center md:items-start">
        <img
          src={profile}
          alt="Testimonial User"
          className="w-32 md:w-54 rounded-full"
        />
      </div>
      <div className="font-inter flex flex-col items-center md:items-start">
        <h2 className="text-md font-semibold">{name}</h2>
        <p className="text-sm text-placeholder">{role}</p>
        <p className="text-sm mt-3 md:mt-5 line-clamp-3">“{message}”</p>
        <p className="text-sm mt-4 md:mt-6">— {date}</p>
      </div>
    </div>
  );
}
