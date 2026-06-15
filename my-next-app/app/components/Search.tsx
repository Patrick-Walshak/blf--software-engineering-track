"use client";

type Props = {
  query: string;
  onSearch: (value: string) => void;
};

const Search = ({ query, onSearch }: Props) => {
  return (
    <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 mt-4">
      <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search tasks..."
        className="bg-transparent text-sm text-white placeholder-zinc-500 outline-none w-full"
      />
    </div>
  );
};

export default Search;