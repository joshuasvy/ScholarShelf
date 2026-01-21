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
    <div className="w-98 h-auto bg-white flex flex-row justify-between gap-6 p-4 rounded-md shadow-md">
      <div>
        <img
          src={profile}
          alt="Testimonial User"
          className="w-42 rounded-full"
        />
      </div>
      <div className="font-inter flex flex-col">
        <h2 className="text-md font-semibold">{name}</h2>
        <p className="text-sm text-placeholder">{role}</p>
        <p className="text-sm mt-5 line-clamp-3">“{message}”</p>
        <p className="text-sm mt-6">— {date}</p>
      </div>
    </div>
  );
}
