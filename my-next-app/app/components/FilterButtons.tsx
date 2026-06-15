"use client";

type Props = {
  active: string;
  onFilter: (filter: string) => void;
};

const filters = ["All", "Active", "Done"];

const FilterButtons = ({ active, onFilter }: Props) => {
  return (
    <div className="flex gap-2 mt-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilter(filter)}
          className={`px-4 py-1 rounded-full text-sm border transition-all
            ${active === filter
              ? "bg-violet-600 border-violet-600 text-white"
              : "bg-transparent border-zinc-600 text-zinc-400 hover:border-zinc-400"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;