interface testimonialData {
  id: number;
  profile: string;
  name: string;
  role: string;
  message: string;
  date: string;
}

export const testimonial: testimonialData[] = [
  {
    id: 1,
    profile: "/images/sections/testimonial-profile-1.jpg",
    name: "James P. Reyes",
    role: "Educator",
    message:
      "The collection encourages disciplined study while promoting broader intellectual exploration.",
    date: "June 2024",
  },
  {
    id: 2,
    profile: "/images/sections/testimonial-profile-2.jpg",
    name: "Mariel L. Santos",
    role: "Undergraduate Student",
    message:
      "The organized access to academic materials has significantly supported my research and...",
    date: "April 2025",
  },
  {
    id: 3,
    profile: "/images/sections/testimonial-profile-3.jpg",
    name: "Daniel R. Cruz",
    role: "Researcher",
    message:
      "Clear availability and structured access to resources make scholarly work more focused...",
    date: "December 2025",
  },
];
