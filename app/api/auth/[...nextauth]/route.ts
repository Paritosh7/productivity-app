import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handlers = NextAuth(authOptions);

export const { GET, POST } = handlers;
