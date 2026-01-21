interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  textClassName?: string;
}

function Button({
  text,
  onClick,
  type = "button",
  className = "",
  textClassName = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white font-inter text-md font-bold bg-secondary rounded-md shadow-md px-16 py-2 cursor-pointer ${className}`}
    >
      <span className={`font-inter text-white ${textClassName}`}>{text}</span>
    </button>
  );
}

export default Button;
