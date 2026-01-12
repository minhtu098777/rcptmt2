import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🎬 Phim đang chiếu</h2>
      <div className="row">
        {movies.map((m) => (
          <div className="col-md-3" key={m.id}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
    </div>
  );
}
