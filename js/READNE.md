#### VSCODE 推荐安装 code-runner 可以直接运行js文件

# 用于判断对象类型
typeof
instanceof

# 字符串 construct
length
toString
toUpperCase
toLowerCase
trim 删除两边空白
trimleft 删除左边空白
trimright 
charAt(3) 获取index为3的字符
slice
substr
substring
indexOf 找不到时返回-1
lastindexOf
search
includes(子串)
startsWith
endsWith
replace
repeat(number)
split(String) ---> return Array

# Boolean 

# Number
isInteger 判断是否为整数
toFixed
isNaN 判断这个value不是一个数字，返回true or false

## 类型转换
parseInt
parseFloat
toString

### Math
Math.min(1,2,3)
Math.max(1,2,3)
ceil
floor
round 四舍五入
random

### Date 时间戳单位（ms 毫秒）
new Date() --- return date object
now = new Date(2028, 4, 5, 1, 22, 16);
let info = [2020, 2, 20, 10, 15, 32];
let date = new Date(...info);

valueOf() 返回时间戳
getTime() 返回时间戳
getMonth
getDate
getHours
getMinutes
getSeconds

# 数组 Array
```
length 长度
push
of(1,2,3)       创建数组 --- [1,2,3]
isArray
toString        转换成String
join            按指定字符拼接数组
concat          拼接数组如 [1,2].concat([2,3]) = [1,2,2,3]
from("yuming")  将字符串转换成Array [ 'y', 'u', 'm', 'i', 'n', 'g' ]
pop
shift 前面弹出
unshift 前面压入
fill 填充
slice(1,3) 截取2个 左闭右开
splice(从哪里开始删除，删除个数，添加元素)  增删改查
indexOf         返回元素下标
includes        判断该数组中是否包含该元素
find            用于查找引用类型
findindex       return index
sort            排序
reverse         逆序
```

### 循环
for
forEach
for in 
for of
> 返回迭代器
keys()
values()
entries()

every       全为真
some        有一个为真
filter
map
reduce

# Symbol
const obj = Symbol("description")
description     查看描述
for("description")  登记该symbol
keyFor              从登记的symbol对象拿取description


# Set 
add()
values()
entires
size
has
delete
clear       删除所有元素

# Map
get
has
size
delete
clear

# 函数
>arguments 函数参数
> apply call bind 改变this指向

# 面向对象

[Symbol.toPrimitive]    数据类型转换函数
## 属性管理
delete obj.name         删除对象属性
hasOwnProperty('str')          检测是否有某个属性

## object 相关函数
object.assign(obj,...)  将其他对象的属性压入obj
object.getOwnPropertyDescription(obj,属性)
    configurable 能否delete
    enumerate   是否可循环
    writable    是否可修改
    value       默认值undefined
> 设置单个
object.defineProperty(对象,属性,{配置})
> 设置多个
Object.defineProperties(user, {
  name: { value: "向军", writable: false },
  age: { value: 18 }
});

> object.prevventExtensions(obj) 静止添加属性
> object.isExtensible       判断该对象是否可添加属性
> object.seal()             封闭对象
> object.freeze             
### 属性访问器 && 代理拦截
getter/setter
set property(args) set ....
get property(args) return ...

### JSON序列化
JSON.stringify()
JSON.parse()


# 原型与继承
prototype
__proto__

object.setPrototypeOf(a,b)      设置原型
object.isPrototype(a)
object.create(obj
)

# 类

# 模块


# 正则

# promise

# 任务管理

# promise 核心

# DOM

# 事件

# 网络请求