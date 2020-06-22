# 全局api
```js
# 1.Vue.extend
<div id="mount-point"></div>
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')

# 2.Vue.nextTick

将修改的数据更新到DOM，(响应式)
# 3. Vue.set()

删除数据
# 4. vue.delete(object|array, index|propertyName)

添加自定义指令
# 5. Vue.directive 

过滤器
# 6. Vue.filter(string,() =>{any})

声明一个全局组件
# 7. Vue.component(string[id],{
	options
})

安装一个插件
# 8. Vue.use(plugin)

混入
# 9. Vue.mixin

将模板编译成render函数
# 10. Vue.compile
var res = Vue.compile('<div><span>{{ msg }}</span></div>')

new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})

让一个对象响应式
# 11. Vue.observable

# 12. Vue.version
```

# 选项/数据

```js
> data

> props
简单写法
props:['value1','value2']
对象写法
props:{
	value:number,
	age: {
		  type: Number,
		  default: 0,
		  required: true,
		  validator: function (value) {
			return value >= 0
		  }
}

> propsData
只能用于new创建的实例中

> computed
简单写法
computed: {
  aDouble: vm => vm.a * 2
}
详细写法
aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }

> methods

> watch
监听响应式数据变化
data:{a:1,b:{c:1}}
watch:{
	a(newValue,oldValue){
		
	},
	'b.c'(newValue,oldValue){
		
	}
}

```

# 选项/DOM
```
> el
> template
<script type=x-template"">
> render

> renderError
# 当render出错是调用
renderError(h,error){
	return h('pre',error)
}
```

# 选项/声明周期

```
> beforeCreate()
> created

> beforeMount
> mounted

> beforeUpdate
> updated

>activated
deactivated

>beforeDestroy
> destroyed

> errorCaptured
```

# 选项/ 资源

```
directives

filters

components
```

# 选项/组合
```
parent
mixin
extends
provide
```

# 实例property
```
vm.$data
vm.$props
vm.$options
vm.$root
$parent
$children
$slots
$refs
$isServer
$attrs
$listener


```

# 实例方法/数据
```
vm.$watch
vm.$set
vm.$delete
```

# 实例方法、事件
```
vm.$on(自定义事件名，function)
vm.$emit(自定义事件名，arg) ---> 触发自定义事件

> $once   
$off解绑
$emit触发自定义事件
```

# 实例生命周期
```
$mount
$forceUpdate
$nextTick
$destroy

```

# 特殊attribute
```
ref
key 可以使组件不复用
is  动态渲染组件

```

# 内置组件
```
component
slot
keep-alive
```