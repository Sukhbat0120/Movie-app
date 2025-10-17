import { Nav } from "@/components/Nav";

import { Footer } from "@/components/Footer";
import { SectionMovies } from "@/components/SectionMovies";

import { MovieType } from "@/lib/types";
import { axiosInstance } from "@/lib/utils";
import { CarouselSection } from "@/components/Carousel";

export default async function Home() {
  const getMovies = async (category: string) => {
    const response = await axiosInstance(
      `/movie/${category}?language=en-US&page=1`
    );
    return response.data.results.slice(0, 10).map((movie: MovieType) => ({
      title: movie.title,
      id: movie.id,
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
      <CarouselSection />
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
