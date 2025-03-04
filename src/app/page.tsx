import Image from "next/image";
import image from "../../public/Homepage.jpg";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src={image}
        fill
        alt="Homepage Background"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Your content goes here */}
      </div>
    </div>
  );
}
