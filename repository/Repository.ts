export class Repository<T extends { id: number }> {
    // Repository: DB操作

    private items: T[] = [];

    async add(item: T) {
        this.items.push(item);
    }

    async getAll() {
        return this.items;
    }

    async findById(id: number) {
        return this.items.find(item => item.id === id);
    }

    // 部分更新
    async update(id: number, item: Partial<T>) {
        const targetIndex = this.items.findIndex(item => item.id === id);

        if (targetIndex === -1) {
            return
        }
        // 更新
        this.items[targetIndex] = {
            ...this.items[targetIndex],
            ...item
        };
    }
    // 削除
    async delete(id: number): Promise<boolean> {
        const before = this.items.length;
        this.items = this.items.filter(
            item => item.id !== id
        )

        return this.items.length > before;
    }
}
