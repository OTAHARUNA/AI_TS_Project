// 動作確認↓
// const greet = (name: string): string => {
//   return `Hello ${name}`;
// };

// console.log(greet("TypeScript"));

// 課題
function greet(name: string): string {
  return "Hello " + name;
}

// ↓ わざとエラー出す
console.log(greet(123));
