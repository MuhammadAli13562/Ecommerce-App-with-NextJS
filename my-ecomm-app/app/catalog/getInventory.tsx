import { querytoDB, connectToDB } from "utils/db/database";
import Image from "next/image";
import AddButton from "components/Addbutton";

export default async function GetInventory() {
  try {
    await connectToDB();
  } catch (err) {
    return <>Error Connecting to DB</>;
  }
  try {
    const items = await querytoDB({}, "");
    return (
      <div className="pt-8 pl-4 pb-2 flex flex-row flex-wrap gap-x-16 gap-y-8">
        {items &&
          items.map((item) => {
            const img = `/${item.itemImage}`;

            return (
              <div className="flex flex-col bg-gray-300 w-80 h-34 ">
                {" "}
                <Image
                  src={img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "40vw", height: "30vh" }}
                  alt="asd"
                />
                <div>{item.itemName}</div>
                <div>Quantity Left : {item.itemQuantity}</div>
                <AddButton />
              </div>
            );
          })}
      </div>
    );
  } catch (error: any) {
    return <>Error Fetching Data from Database {error.message}</>;
  }
}
