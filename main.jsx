const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {
  const poster = movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : null;
  const rating = Number.isFinite(movie.vote_average) ? Number(movie.vote_average).toFixed(1).replace(/\.0$/, '') : 'N/A';

  return (
    <article className="movie-card">
      {poster ? (
        <img className="movie-poster" src={poster} alt={movie.title} />
      ) : (
        <div className="poster-placeholder">{movie.title}</div>
      )}
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date || 'N/A'}</p>
      <p>Rating: {rating}</p>
    </article>
  );
}
