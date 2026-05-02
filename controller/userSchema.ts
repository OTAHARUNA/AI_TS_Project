import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    age: z.number(),
    email: z.string(),
});
