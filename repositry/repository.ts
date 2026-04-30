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

    async update(id: number, item: T) {
        //最初findByIdで存在見てidと一致する配列を更新と思っていたが、後者が一般的でないかもでindex
        const targetIndex = this.items.findIndex(item => item.id === id);

        if (targetIndex === -1) {
            return
        }
        // 更新
        this.items[targetIndex] = item;
    }
}
