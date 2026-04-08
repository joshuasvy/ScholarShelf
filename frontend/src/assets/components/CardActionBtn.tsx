import { useNavigate } from "react-router-dom";

export default function CardActionBtn({
  text = "See More",
  bookId,
}: {
  text?: string;
  bookId: number;
}) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(`/book/${bookId}`)}
        className="flex flex-row items-center gap-1 hover:underline cursor-pointer"
      >
        <p className="font-regular font-semibold text-secondary">{text}</p>
        <img src="/images/icons/next.png" alt="Next Action" className="w-6" />
      </button>
    </div>
  );
}
