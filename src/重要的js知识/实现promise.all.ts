Promise.all = (promises: any): Promise<any> => {
  // promises 是可迭代对象，省略参数合法性检查
  return new Promise((resolve, reject) => {
    // Array.from 将可迭代对象转换成数组
    promises = Array.from(promises);
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result: any[] = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        // 考虑到i可能是thenable对象也可能是普通值
        Promise.resolve(promises[i]).then(
          (data) => {
            result[i] = data;
            if (++index === promises.length) {
              // 所有的promises状态都是funfilled，primise.all 返回的实例才变成fulfilled态
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: "kkkk1"
      });
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: "kkkk2"
      });
    }, 2000);
  })
]).then((res) => {
  console.log(res);
});
