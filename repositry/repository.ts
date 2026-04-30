class Repository<T extends {id:number}> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    getAll() {
        return this.items;
    }

    findById(id: number) {
        return this.items.find(item => item.id === id);
    }
}
