import { User } from "../../controller/UserSchema"
import { IUserRepository } from "./IUserRepository"

export class UserRepository implements IUserRepository {
    private items : User[]= [];

    async add(user: User) {
        this.items.push(user);
        return user;
    }
    async findById(id: number) {
        return this.items.find(item => item.id === id);
    }
    async getAll() {
        return this.items;
    }
    // 部分更新
    async update(id: number, user: Partial<User>) {
        const index = this.items.findIndex(id => id === id);
        if (index === -1) return;

        this.items[index] = {
            ...this.items[index],
            ...user,
        }
    }
    async delete(id: number) {
        this.items = this.items.filter(id => id !== id);
    }
}
