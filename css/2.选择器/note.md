# 选择器


## 基本选择器
.class | .test
#id | #ele
element | div
element, element | div, p
element element | div div
element > element | div > p
element + element | div+p  | 紧挨着div后面的所有p元素

## 结构选择器
element element | div p
element>element | div>p
element+element| div+p 
element1~element | p~ ul

## 属性选择器
[attribute] | [target] | 带有target的属性元素
[attribute=value] 
[attribute~=value] | [title~=flower] | title带有flower的所有元素
[attribute|=value] | 以value开头的
[attribute*=value] | a[src*="abc"] | 选择src包含abc的a元素
[attribute^=value] 
[attribute$=value]

## 伪类选择器
:link | a:link 未访问的连接
:visited| a:visited 已被访问连接
:hover | a:hover 鼠标移动上去
:active| a:acitve 点击时
:focus | a:focus 聚焦式

:root | :root | 文档的根元素HTML
:empty| p:empty | 没有子元素的节点
> 包括后代
:first-child | p:first-child | 选择p的第一个子元素
:last-child| p:last-child

:first-of-type| div p:first-of-type | div下面的第一个为p的子元素
:last-of-type 同上

only-of-type | 选择同级中唯一为xxx的元素
only-child | 选择唯一子元素为xxx

:nth-child(n) | 第n个child
:nth-child(odd)
:nth-child(even) 
:nth-of-type(n) |第 n个类型为xxx的child

:nth-last-child(n)
:nth-last-of-type(1)

:not(selector) | :not(p)

## 表单伪类
:enabled 启用
:disabled 禁用
:checked 被选中的
:required 包含 required的元素
:optional 不包含required 的元素
:valid 验证通过的表单元素
:invalid 验证不通过的元素

## 字符伪类
::before 在每个元素之前插入
::after 在每个元素之后插入
::first-letter 选择元素的首字母