import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import { DetailMovieHeader } from "./_components/DetailMovieHeader";
import { DetailMovieSection } from "./_components/DetailMovieSection";
import { DetailMovieInfo } from "./_components/DetailMovieInfo";
export default function Home() {
  return (
    <div className="w-100%">
      <Nav />
      <DetailMovieHeader />
      <DetailMovieSection />
      <DetailMovieInfo />
      <Footer />
    </div>
  );
}
