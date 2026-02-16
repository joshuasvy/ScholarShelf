export interface Book {
  id: number;
  book_cover: string;
  book_cover_public_id: string;
  title: string;
  sub_title?: string;
  author: string;
  language: string;
  abstract: string;
  publisher: string;
  year: number;
  citation?: string;
  topic: string;
  shelf_code: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
}
