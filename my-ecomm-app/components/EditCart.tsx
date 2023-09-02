"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditCart({ itemID }: { itemID: String }) {
  const [edit, setedit] = useState(false);
  const router = useRouter();

  function handleSaveItem() {
    setedit(false);
  }

  function handleDeleteItem() {
    axios
      .delete(`http://localhost:3000/api/cart/${itemID}`, {
        data: { userID: "m.ali8.aj8@gmail.com" },
      })
      .then(() => alert("item deleted"))
      .then(() => router.refresh());
  }

  if (edit === false) {
    return (
      <button onClick={() => setedit(true)} className="w-full bg-yellow-500">
        Edit Cart Item
      </button>
    );
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleSaveItem} className="bg-green-700">
        Save
      </button>
      <button onClick={handleDeleteItem} className="bg-red-500">
        Delete Item
      </button>
    </div>
  );
}
