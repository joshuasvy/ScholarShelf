import { useRef } from "react";

export default function ProfileUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file: ", file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src="/images/sections/testimonial-2.png"
        alt="User Profile"
        className="w-38 md:w-44 lg:w-48 rounded-full object-cover"
      />
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
      >
        <img
          src="/images/icons/upload-profile.png"
          alt="Upload Profile"
          className="w-5 h-5"
        />
        <p className="font-inter font-medium underline tracking-wide text-secondary">
          Upload Image
        </p>
      </div>
      <input
        type="file"
        accept="image*/"
        ref={fileInputRef}
        onChange={handleFileChange}
        placeholder="Upload an Image"
        className="hidden"
      />
    </div>
  );
}
