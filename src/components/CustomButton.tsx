import type { ButtonHTMLAttributes } from "react";

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

export const CustomButton = ({
  onClick,
  disabled,
  isLoading,
}: ICustomButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
    >
      {isLoading ? "Generating..." : "Generate Result"}
    </button>
  );
};
