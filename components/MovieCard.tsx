"use client";
import { MovieType } from "@/lib/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import StarIcon from "./StarIcon";

export const MovieCard = (props: { movie: MovieType }) => {
  const { movie } = props;
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/details/${movie.id}`);
  };
  return (
    <Link href={`/details/${movie.id}`} onClick={handleOnClick}>
      <div className="h-[439px] w-[230px] overflow-hidden flex flex-col align-start rounded-lg ">
        <img
          src={movie.poster_path}
          alt={movie.poster_path}
          width={230}
          height={340}
        />
        <div className="bg-gray-100 w-full h-full p-4">
          {" "}
          <div className="flex items-center">
            <StarIcon />
            {movie.vote_average.toFixed(1)}
            <p className="text-base text-gray-400">/10</p>
          </div>
          <h2 className="font-semibold text-base">{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
};
