import { MovieType } from "@/lib/types";
import { MovieCard } from "./MovieCard";
import { Movies } from "@/lib/constant";
export const SectionMovies = (props: { movie: MovieType }) => {
  const { movie } = props;
  return (
    <div>
      <div className="flex justify-between">
        <h1>Upcoming</h1>
        <button>
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      {Movies.map((movie, index) => (
        <MovieCard movie={movie} key={index}></MovieCard>
      ))}
    </div>
  );
};
