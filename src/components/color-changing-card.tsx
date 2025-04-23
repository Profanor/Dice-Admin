import React, { useState } from "react";

interface ColorChangingCardProps {
  text: string;
}

const ColorChangingCard: React.FC<ColorChangingCardProps> = ({ text }) => {
  const [inputValue, setInputValue] = useState<string>("#ffffff");
  const [color, setColor] = useState<string>("#ffffff");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // validate and update preview color
    const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(value);
    if (isValidHex) setColor(value);
  };

  return (
    <div className="flex flex-col items-start p-4 bg-white border border-gray-100 rounded-xl shadow-md w-full max-w-sm">
      <div className="flex items-center w-full mb-2">
        <p className="text-[14px] text-[#383A44] flex-grow">{text}</p>
        <div
          className="w-10 h-10 border border-gray-200 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="#RRGGBB"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm"
      />
    </div>
  );
};

export default ColorChangingCard;
