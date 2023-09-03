import { getServerSession } from "next-auth";
import { Options } from "app/api/auth/[...nextauth]/options";
import SignInButton from "./signin";
import Image from "next/image";
import logo from "../public/logo.png";

export default async function Header() {
  const session = await getServerSession(Options);

  return (
    <div className="border-solid border-black border-2 fixed top-0 left-0 z-50 w-full flex flex-col justify-center h-60  rounded-fulltext-black ">
      <div className="flex justify-evenly bg-black pb-2 pt-2">
        <div className="text-white">
          <div className="text-sm">HASSLE-FREE</div>
          <div className="text-sm">Exchange-Policy</div>
        </div>
        <div className="text-white">
          <div className="text-sm">FREE DELIVERY</div>
          <div className="text-sm">on orders above 1499</div>
        </div>
      </div>
      <div className=" bg-white flex flex-row justify-evenly pt-6 flex-grow items-center pl-28 ">
        <div className="text-2xl flex ">
          <div>Search</div>
        </div>
        <div className="flex gap-x-6 items-center text-base text-gray-500">
          <div>HOME</div>
          <div>NEW ARRIVALS</div>
          <div>MEN</div>
          <Image alt="logo" src={logo} width={120} height={120} />
          <div>WOMEN</div>
          <div>ACCESSORIES</div>
          <div>BUNDLE DEALS</div>
        </div>
        <div>
          {session ? (
            <div className="flex gap-x-12">
              <div className="">
                <a href="/cart">Cart</a>
              </div>
              <div className="flex flex-col ">
                <h1 className="">User Logged In</h1>
              </div>
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
}
