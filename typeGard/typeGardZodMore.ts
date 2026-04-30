// Zodの追加問題
const fetchProducts = async (): Promise<unknown> => {
    return [
        { id: 1, name: "Keyboard", price: 5000 },
        { id: 2, name: "Mouse", price: "3000" }, // 壊れてる
        { productName: "Monitor", price: 20000 }, // 壊れてる
        { id: 3, name: "Desk", price: 15000 }
    ];
};

import { z } from "zod";

const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
}) //1行ずつチェック用
type Product = z.infer<typeof ProductSchema>; //ここでは使わないが今後使用

const main = async () => {
    const data = await fetchProducts(); //中身を取り出すためにawait

    // 配列かチェック
    if (!Array.isArray(data)) {
        console.log("Invalid Data");
        return;
    }

    const validProducts = data
        .map(product => ProductSchema.safeParse(product))
        .filter(result => result.success)
        .map(result => result.data)
    let totalPrice = 0;

    validProducts.forEach((product) => {
        console.log(`${product.name} - ${product.price}`);
        totalPrice += product.price;
    }
    )
    console.log(`Total: ${totalPrice}`)
}

main();
