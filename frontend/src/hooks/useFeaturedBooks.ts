import { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import type { BookInterface } from "../types/type";
import axios from "axios";

export function useFeaturedBooks() {
  const [featuredBooks, setFeaturedBooks] = useState<BookInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeaturedBooks() {
      try {
        const response = await axios.get(`${API_URL}/books/featured`);
        setFeaturedBooks(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 500) {
            setError("Internal Server Error. Please try again later.");
          } else {
            setError("Something went wrong. Please try again.");
          }
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedBooks();
  }, []);

  return { featuredBooks, loading, error };
}
