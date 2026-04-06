import { useState, useEffect } from "react";
import { API_URL } from "../utils/config";
import type { BookInterface } from "../types/type";
import axios from "axios";

export function usePopularBooks() {
  const [popularBooks, setPopularBooks] = useState<BookInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPopularBooks() {
      try {
        const response = await axios.get(`${API_URL}/books/most-popular`);
        setPopularBooks(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 500) {
            setError("Internal Server Error. Please try again later.");
          } else {
            setError("Something went wrong. Please try again.");
          }
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPopularBooks();
  }, []);

  return { popularBooks, loading, error };
}
