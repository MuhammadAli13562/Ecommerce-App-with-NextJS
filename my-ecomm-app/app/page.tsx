import Image from "next/image";
import WayfairImage from "@public/wayfair-landing.jpg";

export default function Home() {
  return (
    <>
      <Image alt="wayfair home" src={WayfairImage} height={1000} width={2000} />
    </>
  );
}
