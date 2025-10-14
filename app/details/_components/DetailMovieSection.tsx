import { MovieType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
export const DetailMovieSection = (props: { movie: MovieType }) => {
  const { movie } = props;
  return (
    <div className="flex">
      <Image src={movie.poster_path} alt={movie.poster_path} />
      <ReactPlayer src="" />
    </div>
  );
};
