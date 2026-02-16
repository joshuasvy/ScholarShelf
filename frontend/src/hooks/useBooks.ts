import type { BookInterface } from "../types/type";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import axios from "axios";

export function useBooks() {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(`${API_URL}/books`);
        if (!response) throw new Error("Failed to fetch books");
        setBooks(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 500) {
            setError("Internal server error.");
          } else {
            setError("Someting went wrong.");
          }
        } else {
          setError("Unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  return { books, loading, error };
}
