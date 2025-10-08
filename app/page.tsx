import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Nav } from "@/components/Nav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCard } from "@/components/MovieCard";
import { Footer } from "@/components/Footer";
import { SectionMovies } from "@/components/SectionMovies";
import axios from "axios";
import { MovieType } from "@/lib/types";
import { title } from "process";
import { axiosInstance } from "@/lib/utils";
export default async function Home() {
  const getMovies = async (category: string) => {
    const response = await axiosInstance(
      `/movie/${category}?language=en-US&page=1`
    );
    return response.data.results.map((movie: MovieType) => ({
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
  };
  const upcomingMovies = await getMovies("upcoming");
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");

  return (
    <div className="w-[1440px] max-w-[1440px] flex flex-col gap-1">
      <Nav></Nav>

      <Carousel className="w-full flex flex-center items-center ">
        <CarouselContent className="w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <img src="/wickedHome.jpg" alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[50px] top-[400px]" />
        <CarouselNext className="absolute right-[200px] top-[400px]" />
      </Carousel>

      <SectionMovies
        movies={upcomingMovies}
        movieTitle={"Upcoming"}
      ></SectionMovies>
      <SectionMovies
        movies={popularMovies}
        movieTitle={"Popular"}
      ></SectionMovies>
      <SectionMovies
        movies={topRatedMovies}
        movieTitle={"Top Rated"}
      ></SectionMovies>
      <Footer />
    </div>
  );
}
