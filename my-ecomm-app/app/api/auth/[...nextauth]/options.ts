import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "node_modules/next-auth/providers/credentials";
import GoogleProvider from "node_modules/next-auth/providers/google";

export const Options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: { strategy: "jwt", maxAge: 30 },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-best-username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-great-password",
        },
      },

      async authorize(credentials) {
        const user = { id: "123", username: "ali", password: "ali" };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
