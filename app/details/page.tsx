import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import { DetailMovieHeader } from "./_components/DetailMovieHeader";
import { DetailMovieSection } from "./_components/DetailMovieSection";
import { DetailMovieInfo } from "./_components/DetailMovieInfo";
import { MovieType } from "@/lib/types";
import { axiosInstance } from "@/lib/utils";

export default function Home() {
  const getMovieDetail = async (movieId: string) => {
    const response = await axiosInstance(`/movie/${movieId}?language=en-US`);
    return response.data as MovieType;
  };
  const movie = getMovieDetail("1257009");

  return (
    <div className="w-100%">
      <Nav />
      <div>
        <div className="flex w-full flex-wrap gap-6 p-4">
          <DetailMovieHeader movie={movie} />
        </div>
      </div>

      <DetailMovieSection />
      <DetailMovieInfo />
      <Footer />
    </div>
  );
}
