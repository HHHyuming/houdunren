# 基础知识
## 操作时机
```html
要操作的DOM节点需要等待该节点渲染完成
可使用 setTimeout， window.onload
or <script defer="defer">
```

# 节点属性
nodeType 	说明
1 	元素节点
2 	属性节点
3 	文本节点
8 	注释节点
9 	document对象
nodeName
tagName
nodeValue

# 节点集合
有Nodelist 和 HTMLCollection两种
## 转换成数组处理
```js
1. Array.from(Nodelist)
2. [...Nodelist].map(element =>{
    element.addEventListener('click', function(){

    })
})
```
## 节点关系

```
childNodes 所有子元素
parentNode 父元素
firstChild  第一个子元素
lastChild
nextSibling 下一个兄弟
previousSibling 前一个兄弟

parentElement
children
childElementCount
firstElementChild
lastElementChild
previousElementSibiling
nextElementSibiling
```

# 选取节点

```
getElementById
getElementByName
getElementByTagName
getElementByClassName

```
## 节点遍历
```
----------- length
for(let i=0; i<length-1; i++){
    node[i]
}
------------- forEach
Nodelist 节点可以使用forEach
nodes.forEach(value =>{
    single_node
})
----------- Array.from
Array.from(nodes,)

--------------- forOf
HTMLCollections 是可以使用forOf

for(const node of nodes){
    log(node)
}
```
# 样式选择器
```
querySelectorAll('.divs')   # 查询所有divs
querySelector('.divs')      # 查询一个

```

# 属性
```
getAttribute
setAttribute
removeAttribute
hasAttribute

```
# 创建节点
```
createTextNode
createElement
createDocumentFragment
cloneNode
importNode
```

# 节点内容
```
innerHTML
outerHTML   包含父标签
textContent inner Text
outerText
insertadjacentText # 将文本插入到元素 内外,前后
```

# 节点管理

```
append
prepend
before
after
replaceWith
app.remove # 移除当前节点

insertAdjacentHTML  # 插HTML
insertAdjacentHTML("beforeend afterend afterbegin beforebegin")

```
# 样式管理
对类控制
```
let app = document.getElementById("app")
app.classList.add('active')
classList.remove
classList.toggle    # 切换类
classList.contains  # 检测类名
```
样式
app.style.backgroundColor = 'blue'
行内样式
app.style.cssText = `background-color:red,color:yellow`

app.style 只能获取内联样式
使用 getComputedStyle 来获取应用在这个元素上所有的样式

window.getComputedStyle(app).fontSize
window.getComputedStyle(app).backgroundColor

# 空间坐标
视口高宽度
window.innerWidth
window.innerHeight
document.documentElement.clientWidth

# 事件
onclick
onkeyup
> 添加事件
addEventListener
removeEventListener

