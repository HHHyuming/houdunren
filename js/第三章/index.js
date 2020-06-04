console.log("index.js");
// 数据类型
/*
typeof 
instanceof

*/

hd = [];

console.log(hd instanceof Array);

// String 构造函数

let nick = "我是最帅的帅";
const content = `input your name <strong>${nick}</strong>`;
console.log(content);
document.write(content);

// 标签模板
let lesson = "css";
let web = "后盾人";
tag`访问${web}学习${lesson}前端知识`;

function tag(strings, ...values) {
  console.log(strings); //["访问", "学习", "前端知识"]
  console.log(values); // ["后盾人", "css"]
}

// 常用函数

/*
length 长度
toUpperCase 转大写
toLowerCase
trim() 移除两边空格

let hd = 'houdunren.com';
console.log(hd.slice(3)); //dunren.com
console.log(hd.substr(3)); //dunren.com
console.log(hd.substring(3)); //dunren.com

console.log(hd.slice(3, 6)); //dun
console.log(hd.substring(3, 6)); //dun
console.log(hd.substring(3, 0)); //hou 较小的做为起始位置
console.log(hd.substr(3, 6)); //dunren

console.log(hd.slice(3, -1)); //dunren.co 第二个为负数表示从后面算的字符
console.log(hd.slice(-2));//om 从末尾取
console.log(hd.substring(3, -9)); //hou 负数转为0
console.log(hd.substr(-3, 2)); //co 从后面第三个开始取两个

indexOf 查找指定元素下表，没找到返回-1

includes 是否包含一个子串
replace 替换
repeat


*/

console.log(nick.indexOf("你"));
console.log("我".includes(nick));
console.log(nick.includes("我"));

// Boolean 构造函数
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Number 构造函数

/*
isInterger 判断是否为一个整数
toFixed 四舍五入
isNaN 判断是不是一个数字

parseInt
parseFloat


*/

console.log(Number.isNaN("1"));
console.log(Number.isNaN(1));
let a = [1, 2];
console.log(Object.is(1, a));

// console.log("我" in nick);

a = [1, 2, 3, 4];

// Math 数学库
console.log(Math.random());

// Date 日期
let now = new Date();

console.log(now.toTimeString());
console.log(now.toUTCString());

console.log(now.toTimeString());

now.getTime();

/**
 * 时间戳
 * getTIme 返回毫秒 = *10^-3 s
 *
 */
