"use client";
import useSWR from "swr";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export const CarouselSection = () => {
  const { data, error, isLoading } = useSWR(
    `/movie/now_playing?language=en-US&page=1`
  );
  return (
    <div>
      <Carousel
        className="w-full flex flex-center items-center "
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          <CarouselItem />
        </CarouselContent>
        <CarouselPrevious className="absolute left-[50px] top-[400px]" />
        <CarouselNext className="absolute right-[200px] top-[400px]" />
      </Carousel>
    </div>
  );
};
