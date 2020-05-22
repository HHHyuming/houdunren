#### flex 布局 弹性盒模型
```
dispaly: flex
flex-direction: row , row-reverse , column , column-reverse

flex-wrap : wrap # 元素溢出折行 
flex-flow: column wrap-reverse # flex-direction 与 flex-wrap 的结合使用
# 主轴
justify-content: # 设置内容对齐方式
# 交叉轴排列
align-items: center # 交叉轴对齐 stretch 啦撑

# 交叉轴对齐方式
align-content

# 单个元素交叉轴控制
align-self 

# 扩展内容大小
flex-grow:1

# 固定宽度，不随响应式
flex-shrink:0 # 不缩小

# 尺寸大小
min-height > flex-basis > height


# 结合 flex-grow 放大 flex-shrink 缩小 flex-basis 基准尺寸
flex : 1 2 100px
```
