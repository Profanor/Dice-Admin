import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  children,
}: FormFieldProps) {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center">
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-gray-700 md:w-1/4 mb-2 md:mb-0"
        >
          {label}
        </label>
        <div className="md:w-3/4">{children}</div>
      </div>
    </div>
  );
}
