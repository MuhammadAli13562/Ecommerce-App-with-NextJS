import { redirect } from "next/navigation";
import { GetCart } from "./CartOps";
import { getServerSession } from "next-auth";
import { Options } from "app/api/auth/[...nextauth]/options";

export default async function CartPage() {
  const session = await getServerSession(Options);

  console.log("session :", session);

  if (!session) {
    redirect("api/auth/signin?callbackUrl=/cart");
  }

  console.log("session after :", session);

  return (
    <div className="w-full flex flex-col text-center">
      <h1>USER CART SHOWN HERE ! </h1>
      <GetCart userid="m.ali8.aj8@gmail.com" />
    </div>
  );
}
