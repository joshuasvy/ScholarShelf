import { useState } from "react";

interface ToggleProps {
  enabled?: boolean;
  onChange?: (value: boolean) => void;
}

export default function Toggle({ enabled = false, onChange }: ToggleProps) {
  const [isOn, setIsOn] = useState(enabled);

  const handleClick = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors cursor-pointer ${
        isOn ? "bg-approved" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-secondary transition-transform ${
          isOn ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
