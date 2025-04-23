type Props = {
  label: string;
  onChange: (file: File) => void;
};

const ImageUpload = ({ label, onChange }: Props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onChange(file);
  };

  return (
    <div className="flex flex-col gap-1 w-full max-w-md">
      <label htmlFor={label} className="text-xs font-semibold text-[#383A44]">
        {label}
      </label>
      <div className="border border-gray-200 rounded-md p-4 text-center flex flex-col items-center justify-center gap-2 h-[150px]">
        <input
          type="file"
          accept=".svg,.png,.jpg,.jpeg,.gif"
          onChange={handleFileChange}
          className="hidden"
          id={label}
        />
        <label htmlFor={label} className="text-sm cursor-pointer">
          <span className="text-blue-500 hover:underline">Click to upload</span>
          <span className="text-gray-700"> or drag and drop</span>
        </label>
        <p className="text-xs text-gray-500">
          (SVG, PNG, JPG or GIF max. 800x400px)
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;
