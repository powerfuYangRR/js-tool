/**
 * 去掉为空或者空数组的请求参数
 */
function formatParams(params: any): object {
  for (let key in params) {
    // for 变量 in 对象 变量是对象的下标 即key
    let value = params[key];
    // Object.prototype.toString.call(value) // 判断类型 [object 类型]
    if (
      Object.prototype.toString.call(value) === "[object Array]" &&
      !value.length
    ) {
      // 当空数组
      delete params[key];
    } else if (!value) {
      // 当空 ‘’
      delete params[key];
    }
  }
  return params;
}
/**
 * 到某一个时间的倒计时，传入的参数以 (YYYY/MM/DD H:mm:ss)
 */
function getEndTime(endTime: string, onOk: Function) {
  var startDate = new Date(); //开始时间，当前时间
  var endDate = new Date(endTime); //结束时间，需传入时间参数
  var t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  } else {
    onOk();
  }
  return "剩余时间" + d + "天 " + h + "小时 " + m + " 分钟" + s + " 秒";
}
/**
 * 拼接参数成为url
 */
function setQueryUrl(obj: any): string {
  let url: string;
  url = Object.keys(obj).reduce((pre, cur) => {
    if (pre == "") {
      return `${cur}=${obj[cur]}`;
    }
    return pre + `&${cur}=${obj[cur]}`;
  }, "");
  return url;
}
/**
 * 解析url参数
 */
function getUrlPrmt(url: string) {
  url = url ? url : window.location.href;
  let pa = url.substring(url.indexOf("?") + 1),
    arrS = pa.split("&"),
    rs: any = {};
  for (let i = 0, len = arrS.length; i < len; i++) {
    let pos = arrS[i].indexOf("=");
    if (pos == -1) {
      continue; // 跳过此循环
    }
    let name = arrS[i].substring(0, pos),
      value = decodeURIComponent(arrS[i].substring(pos + 1));
    rs[name] = value;
  }
  return rs;
}
/**
 * 怎么判断一个对象是不是数组类型？
 */
function getClass(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1);
}
/**
 * 排序算法：冒泡排序
 */
function bubbleSort(arr: any) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //相邻元素两两对比
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //元素交换
      }
    }
  }
  return arr;
}
/**
 * 生成图片二维码：canvas
 * poster:背景  qr： 要贴上的图 cb：callback
 */
function createImgWithQr(poster: string, qr: string, cb: Function) {
  const ratio = 2;
  const width = 300 * ratio,
    height = 533 * ratio,
    qrSize = 104 * ratio,
    gap = 14 * ratio,
    padding = 10 * ratio; // 375 667 130
  let canvas: any = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = width + padding;
  canvas.height = height + padding;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let img = new Image();
  img.src = poster;
  img.crossOrigin = "anonymous";
  try {
    img.onload = () => {
      ctx.drawImage(img, padding, padding, width - padding, height - padding);
      function createUrl() {
        let url = canvas.toDataURL("image/png");
        cb && cb(url);
      }
      function createQr() {
        let qrImg = new Image();
        qrImg.src = qr;
        qrImg.crossOrigin = "anonymous";
        let dx = width - qrSize - gap;
        let dy = height - qrSize - gap;
        qrImg.onload = () => {
          ctx.drawImage(qrImg, dx, dy, qrSize, qrSize);
          createUrl();
        };
      }
      if (qr) {
        createQr();
      } else {
        createUrl();
      }
    };
  } catch (e) {
    cb && cb(false);
    console.log("----e----", e);
  }
}
/**
 * 判断微信浏览器
 * @returns {Boolean}
 */
function isWeiXin(): boolean {
  const ua = window.navigator.userAgent.toLowerCase()
  const match = ua.match(/MicroMessenger/i)
  return match && match[0] === 'micromessenger'
}

console.log(isWeiXin());
/**
 * 取url的参数
 */
function getQuery(key: string) {
  const params = new URLSearchParams(location.search);
  // params.append(key, value)
  params.get(key)
}
