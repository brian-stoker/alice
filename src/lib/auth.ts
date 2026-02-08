import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const AUTHORIZED_EMAIL = "courtneyliz201@gmail.com"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // Only allow the authorized email to sign in
      return profile?.email === AUTHORIZED_EMAIL
    },
    async session({ session }) {
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
})
