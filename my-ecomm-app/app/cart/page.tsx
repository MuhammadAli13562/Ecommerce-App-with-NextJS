"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CartPage() {
  const { data: session, status } = useSession();

  console.log("session :", session);
  console.log("status :", status);

  if (status === "unauthenticated") {
    redirect("api/auth/signin?callbackUrl=/cart");
  }

  if (status === "loading") {
    return <h1>Loading....</h1>;
  }

  console.log("session after :", session);
  console.log("status after :", status);

  return (
    <div className="w-full flex flex-col text-center">
      <h1>USER CART SHOWN HERE ! </h1>
    </div>
  );
}
