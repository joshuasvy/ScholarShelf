export interface Book {
  id: number;
  cover: string;
  title: string;
  author: string;
  topic: string;
  year: number;
}

export const sampleData: Book[] = [
  {
    id: 1,
    cover: "/images/books/architecture-book-1.png",
    title: "The Architect's Handbook of Professional Practice",
    author: "Wiley",
    topic: "Architecture",
    year: 2013,
  },
  {
    id: 2,
    cover: "/images/books/architecture-book-2.png",
    title: "Modern Architecture and Climate",
    author: "Daniel A. Barber",
    topic: "Architecture",
    year: 2020,
  },
  {
    id: 3,
    cover: "/images/books/architecture-book-3.png",
    title: "Risk and Insurance in Construction",
    author: "Nael G. Bunni and Lydia B. Bunni",
    topic: "Architecture",
    year: 2022,
  },
  {
    id: 4,
    cover: "/images/books/architecture-book-4.png",
    title: "Robert Maillart's Bridges",
    author: "David P. Bilington",
    topic: "Architecture",
    year: 2020,
  },
];
