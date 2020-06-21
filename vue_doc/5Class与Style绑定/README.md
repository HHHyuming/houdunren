# Class 与style的绑定

## 在组件上使用

```vue
1.Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
2.<my-component :class="[active,hasError]">

3.<p class="foo bar active hasError">Hi</p>
```
## 内联样式 
### 多重值
```
<div 
:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
</div>
```