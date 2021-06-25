function deepClone(obj, hash = new WeakMap()) {
  console.log(hash);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj != 'object') {
    return obj; // 如果不是复杂数据类型，直接返回
  }
  if (hash.has(obj)) {
    return has.get(obj);
  }
  /**
   * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
   * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
   **/
  let t = new obj.constructor();
  hash.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { //是否是自身的属性
      // 递归
      t[key] = deepClone(obj[key],hash);
    }
  }
  return t;
}

function deepClone2(p,c){
  var c = c || {};
  for(var i in p){
    if(typeof p[i] === 'object'){
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepClone2(p[i],c[i]);
    }else{
      c[i] = p[i];
    }
  }
  return c;
}

function deepClone3(obj) {
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone3(obj[i]) : obj[i]
    }
  }
  return copy
}


// deepClone({ name: "lll" })
// console.log(deepClone(/\ng/)); // RegExp
// console.log(deepClone(new Date("2020-20-21"))); // Date
// console.log(deepClone(111)); // obj != 'object' || null
// const wm1 = new WeakMap(),
//   o2 = function () {};
// wm1.set(o2, 'azerty');
// console.log(deepClone(o2)); // function
// console.log(deepClone([{ name: "lll", fun: function() {} }]));


// deepClone({ name: "lll" })
// console.log(deepClone(/\ng/)); // RegExp
// console.log(deepClone2(new Date("2020-20-21"))); // Date
// console.log(deepClone2(111)); // obj != 'object' || null
// const wm1 = new WeakMap(),
//   o2 = function () {};
// wm1.set(o2, 'azerty');
// console.log(deepClone(o2)); // function
console.log(deepClone3([{ name: "lll", fun: function() {} }]));