import axios from "axios";
import { itemType } from "utils/db/schema";
import Image from "next/image";
import EditCart from "components/EditCart";

export async function GetCart({ userid }: { userid: string }) {
  const resp = await axios.get("http://localhost:3000/api/cart", {
    headers: {
      userid,
    },
  });
  const cartItems = resp.data.cart[0].cartItems;

  return (
    <div className="flex flex-wrap gap-y-12 gap-x-12 pl-6">
      {cartItems &&
        cartItems.map((item: itemType) => {
          const img = `/${item.itemImage}`;

          return (
            <div className="flex flex-col bg-gray-300 w-80 h-34 ">
              <Image
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "40vw", height: "30vh" }}
                alt="image"
              />
              <div>{item.itemName}</div>
              <div>Quantity : {String(item.itemQuantity)}</div>
              <div>
                <EditCart itemID={item.itemID} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
