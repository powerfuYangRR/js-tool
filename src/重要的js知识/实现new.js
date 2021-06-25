function Dog(name) {
  this.name = name
  this.say = function () {
    console.log('name = ' + this.name)
  }
}

function _new() {
  var constr = Array.prototype.shift.call(arguments);
  // 执行[[原型]]连接；obj 是 constr 的实例
  var obj = Object.create(constr.prototype);
  // 执行构造函数，将属性或方法添加到创建的空对象上
  var result = constr.apply(obj, arguments);
  // 如果构造函数执行的结构返回的不是一个对象，返回创建的新对象
  return result instanceof Object? result : obj;
}


var tabs = _new(Dog, 'aaa');
tabs.say();
console.log(tabs.name);