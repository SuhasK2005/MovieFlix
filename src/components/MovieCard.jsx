const MovieCard = ({ movie }) => {
  const { Title, Year, Poster, Type, imdbID } = movie;

  // Placeholder image for movies without posters
  const posterUrl =
    Poster !== "N/A"
      ? Poster
      : "https://via.placeholder.com/300x450/1e293b/64748b?text=No+Poster";

  return (
    <div className="group relative cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Poster Image */}
      <div className="relative aspect-[2/3] overflow-hidden bg-[#2d2d2d] rounded-sm">
        <img
          src={posterUrl}
          alt={Title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
              {Title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-gray-300 mb-3">
              <span>{Year}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded text-xs">
                {Type}
              </span>
            </div>

            <a
              href={`https://www.imdb.com/title/${imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded hover:bg-gray-200 transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
