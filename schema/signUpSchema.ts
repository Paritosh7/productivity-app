import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(10, "Password must be atleast 10 characters"),
  username: z.string().min(2, "min 2 length"),
});

// It inspects the Zod schema (typeof signUpSchema) and derives the corresponding TypeScript type.
export type SignUpSchema = z.infer<typeof signUpSchema>;
