import { User } from "../../controller/userSchema";

export interface IUserRepository {
    add(user: User): Promise<User>;
    getAll(): Promise<User[]>;
    findById(id :number): Promise<User | undefined>;
    update(id: number, user: Partial<User>) : Promise<void>;
    delete(id: number) : Promise<void>;
}
