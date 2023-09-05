"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import slide1 from "../../public/slide1.webp";
import slide2 from "../../public/slide2.webp";
import slide3 from "../../public/slide3.webp";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 }, [
    Autoplay(),
  ]);

  return (
    <div
      className="embla mt-40 border-solid border-black border- h-screen max-h-[65vh] bg-gradient-to-r from-c9d6ff to-e2e2e2 "
      ref={emblaRef}
    >
      <div className="embla__container w-full ">
        <div className="embla__slide relative w-full h-screen max-h-[70vh] ">
          <Image alt="img" src={slide1} fill={true} />
          <button
            onClick={() => alert("button clicked")}
            className="w-12 h-12 bg-yellow-300 z-40"
          >
            Shop now
          </button>
        </div>
        <div className="embla__slide relative w-full h-screen max-h-[70vh] ">
          <Image alt="img" src={slide2} layout="fill" objectFit="cover" />
          <button
            onClick={() => alert("button clicked")}
            className="w-12 h-12 bg-yellow-300 z-40"
          >
            Shop now
          </button>
        </div>
        <div className="embla__slide relative w-full h-screen max-h-[70vh] ">
          <Image alt="img" src={slide3} layout="fill" objectFit="cover" />
          <button
            onClick={() => alert("button clicked")}
            className="w-12 h-12 bg-yellow-300 z-40"
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
