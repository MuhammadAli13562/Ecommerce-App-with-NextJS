"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  function handleSignIn() {
    signIn();
  }

  return (
    <button
      className="text-white text-xl bg-yellow-700 hover:bg-gradient-to-t from-yellow-500 to-yellow-300 hover:text-black rounded-full p-2"
      onClick={handleSignIn}
    >
      Sign In
    </button>
  );
}
