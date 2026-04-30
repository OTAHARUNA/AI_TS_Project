import { UserService } from "../service/userService";
import { UserSchema,User } from "./userSchema";

class UserController{
    // Controller: 入力受付

    constructor(private service: UserService) { };

    async create(req: any, res: any) {
        const parsed = UserSchema.safeParse(req.body);
        const user = await UserService.createUser(parsed.data);
        res.json(user);
    }
}
