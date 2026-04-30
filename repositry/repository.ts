class Repository<T extends {id:number}> {
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
}
