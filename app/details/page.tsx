import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-100%">
      <Nav />

      <div>
        <div>more like this </div>
        <Footer />
      </div>
    </div>
  );
}
