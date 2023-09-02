"use client";

import axios from "axios";
import { signIn, useSession } from "next-auth/react";

export default function AddButton({ itemID }: { itemID: String }) {
  const { data: session, status } = useSession();

  function handleAdd() {
    console.log("Status", status);

    if (status === "authenticated") {
      axios
        .post("http://localhost:3000/api/cart", {
          itemID,
          userID: "m.ali8.aj8@gmail.com",
          itemQuantity: 1,
        })
        .then(() => alert("Added to Cart"));
    }

    if (status === "unauthenticated") {
      alert("You have to sign in first");
      signIn();
    }
  }

  return (
    <button
      className="bg-yellow-400 hover:bg-gradient-to-t from-orange-500 to-yellow-300 transition-colors duration-1000 h-8 rounded-xl shadow-lg"
      onClick={handleAdd}
    >
      Add to Cart
    </button>
  );
}
