import type { ReservationInterface } from "../types/type";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import axios from "axios";

export function useReservations() {
  const [reservations, setReservations] = useState<ReservationInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await axios.get(`${API_URL}/reservations/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setReservations(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            setError("You must logged in to view your reservations.");
          } else if (err.response?.status === 500) {
            setError("Internal server error.");
          } else {
            setError("Someting went wrong.");
          }
        }
      } finally {
        setLoading(false);
      }
    }
    fetchReservations();
  }, []);

  return { reservations, loading, error };
}
