"use client";
import { Children, useState } from "react";
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
import { Movies } from "@/lib/constant";

import { SectionMovies } from "@/components/SectionMovies";
export default function Home() {
  return (
    <div className="w-[1440px] max-w-[1440px] flex flex-col gap-4">
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

      <div className="flex flex-wrap gap-6 p-4">
        <SectionMovies></SectionMovies>
      </div>
    </div>
  );
}
