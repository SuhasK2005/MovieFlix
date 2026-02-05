import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const response = await fetch(
        `${API_URL}&s=${encodeURIComponent(searchTerm)}`,
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || "No movies found. Try a different search term.");
        setMovies([]);
      }
    } catch (err) {
      setError(
        "Failed to fetch movies. Please check your internet connection.",
      );
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Header */}
      <header className="bg-gradient-to-b from-black/80 to-transparent pt-8 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Netflix-style logo */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E50914]">
              MOVIEFLIX
            </h1>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
              Unlimited movies, TV shows, and more.
            </h2>
            <p className="text-lg text-gray-400">
              Search and discover your favorites
            </p>
          </div>

          {/* SearchBar Component */}
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      {/* Movie Results */}
      <main className="container mx-auto px-4 md:px-8 pb-20">
        <MovieList movies={movies} loading={loading} error={error} />
      </main>
    </div>
  );
};

export default App;
