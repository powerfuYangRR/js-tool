// 实现1：利用ES6新增数据类型 (只能去掉基本数据类型)
/* function uniq(array: any[]) {
  return [...new Set(array)];
  // return Array.from(new Set(array));
} */

// 实现2：利用indexof
// function uniq(array: any[]){
//   const result = [];
//   for(let i = 0; i < array.length; i++){
//     if(result.indexOf(array[i]) === -1){
//       result.push(array[i])
//     }
//   }
//   return result;
// }

// 实现3：利用includes
// function uniq(array: any[]){
//   const result: any[] = [];
//   for(let i = 0; i < array.length; i++){
//     if(!result.includes(array[i])){
//       result.push(array[i])
//     }
//   }
//   return result;
// }

// 实现4：利用reduce
// function uniq(array: any[]) {
//   return array.reduce(
//     (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
//     []
//   );
// }

function uniq(array: any[]) {
  let map = new Map();
  let result = [];
  for(let i = 0; i < array.length; i++){
    if(map.has(array[i])){
      map.set(array[i],"");
    }else {
      map.set(array[i],"");
      result.push(array[i]);
    }
  }
  return result;
}

console.log(
  uniq([1, null, undefined, undefined, true, true, 3, 1, 3, 4, 2, null, "2"])
);

console.log({ name: "11" } == { name: "11" });
