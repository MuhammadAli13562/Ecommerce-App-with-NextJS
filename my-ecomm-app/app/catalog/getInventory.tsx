import { FindInDB } from "utils/db/database";
import Image from "next/image";
import AddButton from "components/Addbutton";
import { itemType, item_model } from "utils/db/schema";

export default async function GetInventory() {
  try {
    const items = await FindInDB(item_model, {}, "");
    return (
      <div className="pt-8 pl-4 pb-2 flex flex-wrap gap-x-16 gap-y-12">
        {items &&
          items.map((item: itemType) => {
            const img = `/${item.itemImage}`;

            return (
              <div className="flex flex-col rounded-2xl bg-gray-300 w-80 h-34 ">
                <Image
                  src={img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "40vw", height: "30vh" }}
                  alt="image"
                  className="rounded-t-xl"
                />
                <div className="indent-2 pb-4 pt-2">{item.itemName}</div>
                <AddButton itemID={item.itemID} />
              </div>
            );
          })}
      </div>
    );
  } catch (error: any) {
    return <>Error Fetching Data from Database {error.message}</>;
  }
}
