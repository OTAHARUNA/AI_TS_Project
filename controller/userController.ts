import { UserService } from "../service/userService";
import { UserSchema,User } from "./userSchema";

class UserController{
    // Controller: 入力受付

    constructor(private service: UserService) { };

    async create(req: any, res: any) {
        const parsed = UserSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error)
        }
        const user = await this.service.createUser(parsed.data);

        res.json(user);
    }
}
