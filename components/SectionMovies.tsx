import { MovieType } from "@/lib/types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { Button } from "./ui/button";
export const SectionMovies = (props: {
  movies: MovieType[];
  movieTitle: string;
}) => {
  const { movies, movieTitle } = props;
  return (
    <div className="w-full flex flex-col w-full gap-6 p-4">
      <div className="flex justify-between max-w-[1240px]">
        <button className="font-bold text-2xl ">{movieTitle}</button>
        <Link href={movieTitle} className="flex items-center gap-1">
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33301 8.00004H12.6663M12.6663 8.00004L7.99967 3.33337M12.6663 8.00004L7.99967 12.6667"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="flex w-full flex-wrap gap-6 p-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
};
