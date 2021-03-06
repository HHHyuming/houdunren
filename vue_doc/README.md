# 指令集

```
v-once

条件循环
v-for = "(value,index) in array"
v-for = "(value,key,index) in object"


条件渲染
v-if
v-else
v-else-if
v-show

元素属性绑定
v-bind:attribute

事件绑定
v-on
```

# 缩写
```
v-bind:value =====> :value
v-on:click ====> @click
v-slot:header ===> #header
```

# Vue 实例方法

```js
-------------------------------
#1 methods
-------------------------------
#2 components:{
	name:component
}
-------------------------------
#3 watch(newValue,oldValue)
-------------------------------
props 对象写法
props:{
	title:String
}
-------------------------------
#4 provide inject 提供给后代的方法
provide:function(){
	return{
		testFunction:this.fun
	}
}	

后代使用 inject['testFunction'] 获取该开放的功能
-------------------------------
#5 directive
组件外 Vue.directive
组件内 directives:{
	directive-name:{
		<!-- 指令的定义 -->
		inserted:function(el){
			el.focus
		}
		<!-- 钩子函数 -->
		bind
		inserted
		update
	}
}
-------------------------------
#6 filters
局部使用
filters：{
	capitalize(value){
		return xxx
	}
}

全局使用
Vue.filter('filter-name',(value)=>{})


```

# Vue实例属性

```
$attr
$listeners 当前组件监听的所有事件
$root 		根实例
$parent		当前实例的父组件
$refs.xxx	子元素
$set(obj,key,value)
```


# 数据更新方法(响应式更改视图数据)
```
push
pop
shift
unshift
splice
sort
reverse
```

# Tips
```
is 关键字使用
<div is="my-component"> </div>  和 <my-component></my-component> 是一样的


```


# 事件
## 事件修饰符
```
.stop
.prevent
.capture
.self
.once
.passive
例如:---
<a v-on:click.stop="doThis"></a>

.native 组件添加事件


按键修饰
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

2.1.0 version add
.ctrl
.alt
.shift
.meta

表单修饰符
.lazy  <input v-model.lazy="msg">  使用change事件(内容改变并失去焦点)
number  <input v-model.number="age" type="number">
trim	去掉内容左右两边空白
```

## 事件监听器
```
通过 $on(eventName, eventHandler) 侦听一个事件
通过 $once(eventName, eventHandler) 一次性侦听一个事件
通过 $off(eventName, eventHandler) 停止侦听一个事件
```

# 组件


# 渲染函数 & JSX
```
createElement 参数
createELement(标签 or 组件，数据对象，[子节点(createElement)])
```


# Vue配置
```
# 取消vue所有日志和告警
Vue.config.silent = true

```