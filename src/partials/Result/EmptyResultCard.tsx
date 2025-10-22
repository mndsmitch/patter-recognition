import { FaSearch as SearchIcon } from "react-icons/fa";

interface IEmptyResultCard {
  isLoading: boolean;
}

export const EmptyResultCard = ({ isLoading }: IEmptyResultCard) => {
  return (
    <div className="text-center items-center justify-center flex flex-col gap-2">
      <SearchIcon size={48} className="text-slate-300" />
      <p className="text-slate-500">
        {isLoading
          ? "Loading..."
          : "No patterns found yet. Enter values and generate results."}
      </p>
    </div>
  );
};
