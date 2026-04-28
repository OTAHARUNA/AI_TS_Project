// *******前提*********
// 外部API（中身は信用できない）
const fetchUser1 = async (): Promise<unknown> => {
    return Math.random() > 0.5
    ? { name: "Taro" }
    : { username: "Taro" }; // ← バグってるケース
}; //意味としては、nameとusernameが来る可能性は50%の確立。

// 課題１
type User1 = {
    name : string
}
function isUser1(data1: unknown): data1 is User1 {
    return (
    typeof data1 === "object" &&
    data1 !== null &&
    "name" in data1
    );
}
const main = async () => {
    const data1 = await fetchUser1();
    if (isUser1(data1)) {
        console.log(data1.name)
    } else {
        console.log("Invalid data")
    }
}
main();

// 課題２
const fetchUser = async (): Promise<unknown> => {
  return Math.random() > 0.5
    ? { name: "Taro", age: 20 }
    : { name: 123, age: "20" }; // 型崩れ
};
type User = {
    name: string,
    age : number,
}
function isUser(data: unknown): data is User {
    if (typeof data !== "object" || data === null ||
        !("name" in data) || !("age" in data)){
        return false
    }
    const obj = data as { name?: unknown, age?: unknown }

    return typeof obj.name ==="string" && typeof obj.age === "number"
}
const typeOut = async () => {
    const data = await fetchUser();
    if (isUser(data)) {
        console.log(data.name + "(" + data.age + ")")
    } else {
        console.log("Invalid data")
    }
}
typeOut();
