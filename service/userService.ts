import { UserRepository } from "../repository/userRepository";
import { User } from "../controller/userSchema";

export class UserService {
    // service: ルール判断

    constructor(private repo: UserRepository) { }

    async createUser(user: User) {
        // age < 18 は登録不可
        if (user.age < 18) throw Error("未成年不可");
        // emailは空禁止
        if (user.email === "" || user.email === null) throw Error("email空禁止");
        this.repo.add(user);
        // ここは、複数チェックで生き残ったやつを管理している配列だけ返すとかにしたほうがいいと思う
        return user;
    }

}
