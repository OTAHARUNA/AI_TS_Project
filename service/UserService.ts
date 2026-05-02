import { IUserRepository } from "../repository/user/IUserRepository";
import { User } from "../controller/UserSchema";

export class UserService {
    // service: ルール判断

    constructor(private repo: IUserRepository) { }

    async createUser(user: User) {
        // age < 18 は登録不可
        if (user.age < 18) throw Error("未成年不可");
        // emailは空禁止
        if (user.email === "" || user.email === null) throw Error("email空禁止");

        return this.repo.add(user); //repositoryが保存結果返してくれる
    }

}
