"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  function handleSignIn() {
    signIn();
  }

  return <button onClick={handleSignIn}>Sign In</button>;
}
