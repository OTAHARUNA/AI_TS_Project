const fetchUsers = async (): Promise<unknown> => {
    return [
        { name: "A", age: 20 },
        { name: "B", age: "30" }, // 壊れてる
        { username: "C" }        // 壊れてる
    ];
};
type User = {
    name: string,
    age: number
}
// isUserは中身いじっていない
function isUser(data : unknown) : data is User {
    if (typeof data !== "object" || data === null ||
        !("name" in data) || !("age" in data)
    ) {
        return false
    }
    return typeof data.name === "string" && typeof data.age === "number"
}
const main = async () => {
    const data = await fetchUsers();

    // やり方わからなくて聞いた
    if (!Array.isArray(data)) { //unknownでないことのチェック
        console.log("Invalid data");
        return;
    } else {
        const rightData = data.filter(isUser);
        rightData.forEach(user =>
            console.log(`${user.name} (${user.age})`)
        )
    }
}
main();
