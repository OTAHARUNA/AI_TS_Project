import { z } from "zod";
import { UserSchema } from "../controller/UserSchema";

export type User = z.infer<typeof UserSchema>;
