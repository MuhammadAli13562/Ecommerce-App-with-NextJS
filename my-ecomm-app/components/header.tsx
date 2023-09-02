import { getServerSession } from "next-auth";
import { Options } from "app/api/auth/[...nextauth]/options";
import SignInButton from "./signin";

export default async function Header() {
  const session = await getServerSession(Options);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex flex-col justify-center h-28 bg-yellow-500 rounded-fulltext-black ">
      <div className="flex flex-row justify-evenly">
        <div className="text-2xl">Filter</div>
        <div className="text-7xl font-dancing">Nature Farmland Groceries</div>
        <div>
          {session ? (
            <div className="flex gap-x-12">
              <div className="bg-yellow-700 w-16 h-12 flex justify-center text-xl items-center rounded-lg hover:">
                <a href="/cart">Cart</a>
              </div>
              <div className="flex flex-col ">
                <p>{session.user?.name}</p>
                <p>{session.user?.email}</p>
                <h1 className="text-2xl">User Logged In</h1>
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
