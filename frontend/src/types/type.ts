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
