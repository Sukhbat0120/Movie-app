import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
export default function Home() {
  return (
    <div className="w-100%">
      <Nav />
      <div className="w-full flex justify-between">
        <p> Movie name</p>
        <p>movie rating </p>
      </div>
      <div className="flex">
        <img src="" alt="" />
        <video src=""></video>
      </div>
      <div>
        <div></div>
        <p></p>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
        <div></div>
        <Footer />
      </div>
    </div>
  );
}
