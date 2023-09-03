import Carousel from "components/Carousel";
import FeaturedCollections from "components/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel />
      <FeaturedCollections />
    </>
  );
}
