import Image from "next/image";
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
export default function Home() {
  return (
    <div className="w-[1440px] max-w-[1440px]">
      <Nav></Nav>
      <Carousel>
        <CarouselContent className="">
          <CarouselItem>
            <img
              src="/wickedHome.jpg"
              alt=""
              className="w-100% object-cover  "
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/gladiator.png"
              alt=""
              className="w-[1440px] h-[600px] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/moana.jpg"
              alt=""
              className="w-[1440px] h-[600px] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-[100px]" />
        <CarouselNext className="absolute right-[100px]" />
      </Carousel>
    </div>
  );
}
