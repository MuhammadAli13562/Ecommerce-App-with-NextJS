import { getServerSession } from "next-auth";
import { Options } from "app/api/auth/[...nextauth]/options";
import SignInButton from "./signin";

export default async function Header() {
  const session = await getServerSession(Options);

  return (
    <div className="w-screen flex flex-col justify-center h-28 bg-yellow-500 rounded-fulltext-black ">
      <div className="flex flex-row justify-evenly   w-screen">
        <div className="text-2xl">Filter</div>
        <div className="text-7xl font-dancing">Nature Farmland Groceries</div>
        <div>
          {session ? (
            <div className="flex flex-col ">
              <p>{session.user?.name}</p>
              <p>{session.user?.email}</p>
              <h1 className="text-2xl">User Logged In</h1>
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
}
