import { useState } from "react";
import ImageUpload from "@/components/image-upload";
import ColorChangingCard from "./color-changing-card";

const ThemeSettings = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logos, setLogos] = useState({
    primary: null,
    secondary: null,
    cup: null,
  } as { primary: File | null; secondary: File | null; cup: File | null });

  const handleLogoChange = (key: keyof typeof logos, file: File) => {
    setLogos((prev) => ({ ...prev, [key]: file }));
  };

  const handleSaveChanges = () => {
    console.log("Changes Saved");
  };

  return (
    <div className="space-y-8">
      {/* logo uploads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageUpload
          label="Primary Logo"
          onChange={(file) => handleLogoChange("primary", file)}
        />
        <ImageUpload
          label="Secondary Logo (2x)"
          onChange={(file) => handleLogoChange("secondary", file)}
        />
        <ImageUpload
          label="Cup Image"
          onChange={(file) => handleLogoChange("cup", file)}
        />
      </div>

      <div className="col-span-full flex justify-end mt-6">
        <button
          onClick={handleSaveChanges}
          className="bg-[#2BADE7] text-white px-3 py-3 rounded-full"
        >
          Save Changes
        </button>
      </div>

      {/* color-switching-card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#F9FAFB] rounded-lg shadow-sm">
        <ColorChangingCard text="Active play btn Background" />
        <ColorChangingCard text="Active play btn Color" />
        <ColorChangingCard text="Background" />
        <ColorChangingCard text="Base Text Color" />
        <ColorChangingCard text="Even Tournament Table" />
        <ColorChangingCard text="Odd Tournament Table" />
        <ColorChangingCard text="Play button Color" />
        <ColorChangingCard text="Play Btn Background" />
        <ColorChangingCard text="Primary Text Color" />
        <ColorChangingCard text="Primary Active Text Color" />
        <ColorChangingCard text="Primary Color" />
        <ColorChangingCard text="Primary Active Color" />
        <ColorChangingCard text="Secondary Color" />
        <ColorChangingCard text="Text Color" />
        <ColorChangingCard text="Tournament Btn Background" />
        <ColorChangingCard text="Tournament Btn Color" />
        <ColorChangingCard text="Secondary Color" />
        <div className="col-span-full flex justify-end mt-6">
          <button
            onClick={handleSaveChanges}
            className="bg-[#2BADE7] text-white px-3 py-3 rounded-full"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
