import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { DetailMovieHeader } from "./_components/DetailMovieHeader";
import { DetailMovieSection } from "./_components/DetailMovieSection";
import { DetailMovieInfo } from "./_components/DetailMovieInfo";
import { MovieType } from "@/lib/types";
import { axiosInstance } from "@/lib/utils";

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const movie = await axiosInstance.get<MovieType>(
    `/movie/${id}?language=en-US`
  );
  const { title, vote_average } = movie.data;

  return (
    <div className="w-100%">
      <Nav />
      <div>
        <p>{title}</p>
        <p>{vote_average}</p>
      </div>

      <DetailMovieInfo />
      <Footer />
    </div>
  );
};
export default DetailsPage;
