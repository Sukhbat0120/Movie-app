import { MovieType } from "@/lib/types";

type Props = {
  movie: MovieType;
};

export const DetailMovieHeader = ({ movie }: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};
