function LazyMan(name) {
  if (!(this instanceof LazyMan)) {
    return new LazyMan(name)
  }
  // const cb = (next) => {
  console.log(`Hi I am ${name}!`)
  //   next()
  // }
  this.cbs = [];
  this.name = name;
  // this.cbs = [cb];
  setTimeout(() => {
    this.next()
  }, 0)
}

LazyMan.prototype.eat = function (food) {
  const cb = (next) => {
    console.log(`I am eating ${food}~`)
    next()
  }
  this.cbs.push(cb);
  return this;
}

LazyMan.prototype.sleepFirst = function (time) {
  const cb = (next) => {
    setTimeout(() => {
      console.log(`等待了${time}秒...`)
      next()
    }, time * 1000)
  }
  this.cbs.unshift(cb);
  return this;
}

LazyMan.prototype.sleep = function (time) {
  const cb = (next) => {
    setTimeout(() => {
      console.log(`等待了${time}秒...`)
      next()
    }, time * 1000)
  }
  this.cbs.push(cb);
  return this;
}

LazyMan.prototype.next = function () {
  if (this.cbs.length <= 0) return;
  const first = this.cbs.shift();
  first(this.next.bind(this));
}


LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');