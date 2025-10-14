import { MovieType } from "@/lib/types";

export const DetailMovieHeader = (props: { movie: MovieType }) => {
  const { movie } = props;
  return (
    <div>
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};
