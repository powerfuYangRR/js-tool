// 1. 单位数前补0
const formatNumber = (n: number) => {
  return n > 9 ? n.toString() : "0" + n;
};

// 2. 日期格式化
const formatDate = (date: any) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

// 3. 价格格式化
const formatPrice = (price: number)=> {
  const result: string[] = [];
  const revArr = String(price).split('').reverse();//整数部分倒序
  revArr.forEach(function(item,index){
    result.push(item);
    if((index+1)%3 === 0 && index!= revArr.length -1){
        result.push(',');
    }
  })
  return result.reverse().join('');
}

console.log(formatNumber(9));

console.log(formatDate(new Date()));

console.log(formatPrice(1234567));



