import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { MovieType } from "@/lib/types";
import { axiosInstance, getImageUrl } from "@/lib/utils";
import StarIcon from "@/components/StarIcon";
import React from "react";
import ReactPlayer from "react-player";
const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const movie = await axiosInstance.get<MovieType>(
    `/movie/${id}?language=en-US`
  );
  const { title, vote_average, poster_path, video, release_date, overview } =
    movie.data;

  return (
    <div className="w-100% ">
      <Nav />
      <div className="flex justify-between">
        <div className="p-1">
          {" "}
          <p className="font-bold text-[36px] ">{title}</p>
          <p>{release_date}</p>
        </div>

        <div className="flex items-center">
          <StarIcon />
          <p className="font-bold text-[18px]">{vote_average}</p>
          <p className="text-[16px] text-gray-400">/10</p>
        </div>
      </div>
      <div className="flex gap-8 mt-2.5 mb-2.5 ">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={poster_path}
          width={290}
          height={428}
        />

        <ReactPlayer
          src={`https://www.youtube.com/watch?v=CHSnz0bCaUk&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MA${video}`}
          width={760}
          height={428}
          className="bg-gray-300"
        />
      </div>
      <div>
        <p>{overview}</p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
