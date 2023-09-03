import Image from "next/image";

import img0 from "../public/featured/slide0.webp";
import img1 from "../public/featured/slide1.webp";
import img2 from "../public/featured/slide2.jpg";
import img3 from "../public/featured/slide3.jpg";
import img4 from "../public/featured/slide4.jpg";
import img5 from "../public/featured/slide5.jpg";
import img6 from "../public/featured/slide6.webp";
import img7 from "../public/featured/slide7.webp";

export default function FeaturedCollections() {
  return (
    <div className="flex flex-col justify-center items-center  mt-20">
      <div className="text-4xl">Featured Collections</div>

      <div className="gap-x-8 gap-y-8 mt-8 w-2/3 ">
        <div className="flex flex-wrap gap-x-8 gap-y-8  justify-center">
          {featured_data.map((item) => (
            <div className="flex flex-col items-center   w-1/5">
              <div className="flex justify-center  ">
                <Image
                  src={item.ItemImage}
                  alt="img"
                  width={260}
                  height={150}
                />
              </div>
              <div className="text-center">{item.ItemName}</div>
              <div>{item.ItemPrice}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const featured_data = [
  {
    ItemImage: img0,
    ItemName: "PACK OF 3 T-SHIRTS",
    ItemPrice: "3,300",
  },
  {
    ItemImage: img1,
    ItemName: "ATA-ROYAL BLUE MUSCLE-FIT PREMIUM LYCRA TEE",
    ItemPrice: "1,800",
  },
  {
    ItemImage: img2,
    ItemName: "ATA-NAVY MUSCLE-FIT PREMIUM LYCRA TEE",
    ItemPrice: "1,800",
  },
  {
    ItemImage: img3,
    ItemName: "ATA-SKY BLUE MUSCLE-FIT PREMIUM LYCRA TEE",
    ItemPrice: "1,800",
  },
  {
    ItemImage: img4,
    ItemName: "ATA-CHARCOAL MUSCLE-FIT PREMIUM LYCRA TEE",
    ItemPrice: "1,800",
  },
  {
    ItemImage: img5,
    ItemName: "ATA-BLACK MUSCLE-FIT PREMIUM LYCRA TEE",
    ItemPrice: "1,800",
  },
  {
    ItemImage: img6,
    ItemName: "ATA-WHITE MUSCLE-FIT PREMIUM LYCRA TEE",
    ItemPrice: "1,800",
  },
  {
    ItemImage: img7,
    ItemName: "ATA-GREY BLUE MUSCLE-FIT PREMIUM LYCRA TEE",
    ItemPrice: "1,800",
  },
];
