import { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import type { BookInterface } from "../types/type";
import axios from "axios";

export function useSimilarBooks(bookId: number | undefined) {
  const [similarBooks, setSimilarBooks] = useState<BookInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bookId) return;

    async function fetchSimilarBooks() {
      try {
        const response = await axios.get(`${API_URL}/books/${bookId}/similar`);
        setSimilarBooks(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 404) {
            setError("Book not found.");
          } else if (err.response?.status === 500) {
            setError("Internal server error.");
          } else {
            setError("Something went wrong.");
          }
        } else {
          setError("Unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchSimilarBooks();
  }, [bookId]);

  return { similarBooks, loading, error };
}
