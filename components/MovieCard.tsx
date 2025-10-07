import { MovieType } from "@/lib/types";

import Image from "next/image";

export const MovieCard = (props: { movie: MovieType }) => {
  const { movie } = props;
  return (
    <div className="h-[439px] w-[230px] flex flex-col align-start rounded-lg ">
      <img
        src={movie.poster_path}
        alt={movie.poster_path}
        width={230}
        height={340}
      />
      <div className="bg-gray-100 w-full h-full p-4">
        {" "}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M8.00001 1.33337L10.06 5.50671L14.6667 6.18004L11.3333 9.42671L12.12 14.0134L8.00001 11.8467L3.88001 14.0134L4.66668 9.42671L1.33334 6.18004L5.94001 5.50671L8.00001 1.33337Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {movie.vote_average.toFixed(1)}
          <p className="text-base text-gray-400">/10</p>
        </div>
        <h2 className="font-semibold text-lg">{movie.title}</h2>
      </div>
    </div>
  );
};
