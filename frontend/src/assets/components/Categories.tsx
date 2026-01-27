export default function Categories() {
  const topics = [
    { name: "Antropology", icon: "/images/icons/antropology.png" },
    { name: "Architecture", icon: "/images/icons/architecture.png" },
    { name: "Art", icon: "/images/icons/art.png" },
    { name: "Astronomy", icon: "/images/icons/astronomy.png" },
    { name: "Biology", icon: "/images/icons/biology.png" },
    { name: "Business", icon: "/images/icons/business.png" },
    { name: "Economics", icon: "/images/icons/economics.png" },
    { name: "History", icon: "/images/icons/history.png" },
    { name: "Law", icon: "/images/icons/law.png" },
    { name: "Literature", icon: "/images/icons/literature.png" },
    { name: "Mathematics", icon: "/images/icons/mathematics.png" },
    { name: "Medicine", icon: "/images/icons/medicine.png" },
    { name: "Philosophy", icon: "/images/icons/philosophy.png" },
    { name: "Social Science", icon: "/images/icons/social-science.png" },
    { name: "Religion", icon: "/images/icons/religion.png" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 justify-items-center lg:px-0">
      {topics.map((topic) => (
        <button className="w-50 h-12 md:54 lg:w-58 lg:h-14 flex flex-row justify-center items-center gap-3 rounded-md shadow-md cursor-pointer hover:bg-secondary transition-colors duration-100">
          <img src={topic.icon} alt={topic.icon} className="w-5 md:w-6" />
          <span className="font-inter font-semibold text-md md:text-lg">{topic.name}</span>
        </button>
      ))}
    </div>
  );
}
