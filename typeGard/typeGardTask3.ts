const fetchUsers = async (): Promise<unknown> => {
    return [
        { name: "A", age: 20 },
        { name: "B", age: "30" }, // 壊れてる
        { username: "C" }        // 壊れてる
    ];
};

// *****処理*****
import { z } from "zod";

const isUser = z.object({
    name: z.string(),
    age: z.number()
})


const main = async () => {
    const data = await fetchUsers();

    if (!Array.isArray(data)) {
        console.log("Invalid data");
        return;
    } else {
        // "1行"ずつ型が正しいか正しくないかチェックする必要
        // flatMapの方法もあるが、読みやすいデバックしやすいとか考慮してこちら
        const validUsers = data
            .map(user => isUser.safeParse(user))
            .filter(result => result.success)
            .map(result => result.data)

        validUsers.forEach(user =>
            console.log(`${user.name} (${user.age})`)
        )
    }
}
main();
