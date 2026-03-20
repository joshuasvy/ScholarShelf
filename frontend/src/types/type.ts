export interface BookInterface {
  id: number;
  book_cover: string;
  title: string;
  sub_title?: string | null;
  author: string;
  language: string;
  abstract: string;
  publisher: string;
  year: number;
  citation: string;
  topic: string;
  shelf_code: number;
  status: string;
}

export interface ReservationInterface {
  id: number;
  status: string;
  reserved_at: string;
  updated_at: string;
  book_id: number;
  book_cover: string;
  title: string;
  author: string;
  year: number;
  topic: string;
  shelf_code: number;
}
