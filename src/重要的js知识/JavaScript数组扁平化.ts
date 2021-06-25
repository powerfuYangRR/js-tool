/* 实现1：利用Array.prototype.flat
function flattenDeep(arr: any[]) {
  return arr.flat(Math.pow(2, 53) - 1);
} */

// function flattenDeep(arr: any) {
//   return arr.reduce(
//     (acc: string | any[], val: any) =>
//       Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
//     []
//   );
// }

function flattenDeep(arr: any[]) {
  const stack = [...arr];
  console.log(stack);
  
  const res = [];
  while(stack.length){
    // 使用pop从stack中取出并移除值 
    const next = stack.pop();
    if(Array.isArray(next)){
      // 使用push送回内层数组中的元素，不会改动原始输入
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用reverse恢复原数组的顺序
  return res.reverse();
}

console.log(
  flattenDeep([1, [2, [3, [4, [5, [6, [7, [8], 7], 6], 5], 4], 3], 2], 1])
);

// console.log(
//   flattenDeep([
//     1,
//     [
//       { name: "kk", value: "kk", chinese: [1, [2], 3] },
//       { name: "kk", value: "kk" }
//     ],
//     1
//   ])
// );
