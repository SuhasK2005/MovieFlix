import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center gap-2">
          {/* Search Icon */}
          <div className="absolute left-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search for movies, TV shows..."
            className="flex-1 pl-12 pr-4 py-4 bg-[#2d2d2d] border border-[#404040] text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-[#1a1a1a] transition-all duration-200"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="px-8 py-4 bg-[#E50914] hover:bg-[#f40612] text-white font-semibold transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
