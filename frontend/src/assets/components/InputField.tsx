import React, { useState } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  type = "text",
  placeholder = "",
  value,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-3 relative">
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="font-regular w-full px-2 py-1 border-b border-black focus:outline-none focus:border-b-2 focus:border-secondary transition-colors pr-10"
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <img
            src={
              showPassword ? "/images/icons/show.png" : "/images/icons/hide.png"
            }
            alt={showPassword ? "Show password" : "Hide password"}
            className="w-5 h-5"
          />
        </button>
      )}
    </div>
  );
}
