import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-100%">
      <Nav />
      <div className="w-full flex justify-between">
        <p> Movie name</p>
        <p>movie rating </p>
      </div>
      <div className="flex">
        <Image src="" alt="" />
        <video src=""></video>
      </div>
      <div>
        <div>genre</div>
        <p>movie descrption</p>
        <div>
          <p>Director</p>
          <p>name</p>
        </div>
        <div>
          <p>writters</p>
          <p>name</p>
        </div>
        <div>
          <p>Star</p>
          <p>name</p>
        </div>
        <div>more like this </div>
        <Footer />
      </div>
    </div>
  );
}
