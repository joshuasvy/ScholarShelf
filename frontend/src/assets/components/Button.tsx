interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  textClassName?: string;
  next?: string;
}

function Button({
  text,
  onClick,
  className = "",
  textClassName = "",
  next,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` bg-secondary rounded-md shadow-md px-6 cursor-pointer flex flex-row gap-4 items-center justify-center ${className}`}
    >
      <span
        className={`text-white font-inter text-md font-bold ${textClassName}`}
      >
        {text}
      </span>
      {next && <img src={next} alt="Next Icon" className="w-5 md:w-7" />}
    </button>
  );
}

export default Button;
