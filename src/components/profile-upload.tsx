import type React from "react";
import { useState, useRef } from "react";
import { RefreshCw } from "lucide-react";

const user = "/assets/images/Avatar.svg";

interface ProfileSectionProps {
  initialImage?: string;
  onImageChange?: (file: File) => void;
}

export default function ProfileSection({
  initialImage,
  onImageChange,
}: ProfileSectionProps) {
  const [image, setImage] = useState<string>(initialImage || user);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string);
          if (onImageChange) {
            onImageChange(file);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-6 pb-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/4 mb-2 md:mb-0">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your photo
            </label>
            <p className="text-sm text-gray-500">
              This will be displayed on your profile.
            </p>
          </div>
        </div>

        <div className="md:w-3/4 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={user}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`flex-1 border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
              isDragging
                ? "border-[#2BADE7] bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <RefreshCw className="h-6 w-6 text-gray-400 mb-2" />
            <p className="text-sm text-center">
              <span className="text-[#2BADE7] font-medium">
                Click to upload
              </span>{" "}
              or drag and drop
              <br />
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleInputChange}
              className="hidden"
              accept="image/svg+xml,image/png,image/jpeg,image/gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
