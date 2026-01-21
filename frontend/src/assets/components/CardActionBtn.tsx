export default function CardActionBtn({
  text = "See More",
}: {
  text?: string;
}) {
  return (
    <div>
      <button className="flex flex-row items-center gap-1 hover:underline cursor-pointer">
        <p className="font-regular font-semibold text-secondary">{text}</p>
        <img src="/images/icons/next.png" alt="Next Action" className="w-6" />
      </button>
    </div>
  );
}
