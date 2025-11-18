# 响应式适配使用指南

## 断点定义

本项目定义了以下6个响应式断点：

- **xs**: 393px (手机)
- **sm**: 768px (平板)
- **md**: 1024px (小桌面)
- **lg**: 1440px (桌面)
- **xl**: 1920px (大桌面)
- **xxl**: 2560px (超大桌面)

## 使用原则

### 1. 移动优先 (Mobile First)
所有样式默认针对最小屏幕（<393px），然后使用媒体查询逐步增强。

### 2. 减少代码重写的最佳实践

#### ✅ 推荐方式：使用工具类组合
```html
<!-- 一个元素，多个断点的样式 -->
<div class="d-none d-sm-block d-md-flex">
  <!-- 默认隐藏，≥768px显示为block，≥1024px显示为flex -->
</div>
```

#### ❌ 不推荐：为每个断点写单独的CSS
```css
/* 避免这样做 */
@media (min-width: 393px) { .my-element { ... } }
@media (min-width: 768px) { .my-element { ... } }
@media (min-width: 1024px) { .my-element { ... } }
```

## 常用工具类

### 显示/隐藏
```html
<!-- 默认显示，在≥768px时隐藏 -->
<div class="d-block d-sm-none">移动端可见</div>

<!-- 默认隐藏，在≥1024px时显示 -->
<div class="d-none d-md-block">桌面端可见</div>

<!-- 在≥1440px时显示为flex -->
<div class="d-none d-lg-flex">大屏幕flex布局</div>
```

### 文本大小
```html
<!-- 响应式文本大小 -->
<h1 class="text-base text-sm-lg text-md-xl text-lg-2xl">
  自适应标题
</h1>
```

### 间距
```html
<!-- 响应式内边距 -->
<div class="p-2 p-sm-3 p-md-4 p-lg-5">
  内容区域
</div>

<!-- 响应式外边距 -->
<div class="m-1 m-sm-2 m-md-3">
  内容区域
</div>
```

### 宽度
```html
<!-- 响应式宽度 -->
<div class="w-100 w-sm-75 w-md-50 w-lg-25">
  自适应宽度
</div>
```

### Flexbox布局
```html
<!-- 响应式flex方向 -->
<div class="d-flex flex-column flex-sm-row">
  <div>项目1</div>
  <div>项目2</div>
</div>

<!-- 响应式对齐 -->
<div class="d-flex justify-content-start justify-md-center justify-lg-between">
  内容
</div>
```

## 实际应用示例

### 示例1：响应式导航栏
```html
<nav class="header-nav">
  <!-- 移动端：垂直菜单 -->
  <div class="d-flex flex-column d-sm-none">
    <a href="#">菜单1</a>
    <a href="#">菜单2</a>
  </div>
  
  <!-- 平板及以上：水平菜单 -->
  <div class="d-none d-sm-flex flex-row">
    <a href="#">菜单1</a>
    <a href="#">菜单2</a>
  </div>
</nav>
```

### 示例2：响应式卡片网格
```html
<div class="row">
  <!-- 移动端：1列，平板：2列，桌面：3列，大屏：4列 -->
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">卡片1</div>
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">卡片2</div>
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">卡片3</div>
  </div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">卡片4</div>
  </div>
</div>
```

### 示例3：响应式标题和按钮
```html
<div class="index-banner-text">
  <!-- 响应式标题大小 -->
  <span class="title text-fluid text-sm-lg text-md-xl text-lg-2xl">
    Industry Leading TOPCon Solar
  </span>
  
  <!-- 响应式按钮 -->
  <button class="discover-button 
                 p-2 p-sm-3 p-md-4 
                 text-sm text-md-base text-lg-lg">
    Discover
  </button>
</div>
```

### 示例4：响应式图片容器
```html
<!-- 使用Bootstrap的col类 + 自定义工具类 -->
<div class="row">
  <div class="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
    <img src="image.jpg" class="img-responsive w-100" alt="">
  </div>
</div>
```

## 高级技巧

### 1. 使用CSS变量进行动态调整
```css
/* 在你的自定义CSS中 */
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
}

.my-element {
  padding: var(--spacing-xs);
}

@media (min-width: 768px) {
  .my-element {
    padding: var(--spacing-sm);
  }
}
```

### 2. 使用流体字体 (Fluid Typography)
```html
<!-- 自动根据屏幕大小缩放 -->
<h1 class="text-fluid-lg">自适应大标题</h1>
<p class="text-fluid">自适应正文</p>
```

### 3. 组合使用Bootstrap和自定义类
```html
<!-- Bootstrap的col类 + 自定义显示类 -->
<div class="row">
  <div class="col-12 col-md-6 d-none d-lg-block">
    只在≥1440px显示
  </div>
  <div class="col-12 col-md-6 d-block d-lg-none">
    在<1440px显示
  </div>
</div>
```

## 调试技巧

### 在浏览器中测试不同断点
1. 打开开发者工具 (F12)
2. 使用设备工具栏 (Ctrl+Shift+M)
3. 设置自定义尺寸：
   - 393px (手机)
   - 768px (平板)
   - 1024px (小桌面)
   - 1440px (桌面)
   - 1920px (大桌面)
   - 2560px (超大桌面)

### 查看当前断点
在控制台运行：
```javascript
function getCurrentBreakpoint() {
  const width = window.innerWidth;
  if (width >= 2560) return 'xxl';
  if (width >= 1920) return 'xl';
  if (width >= 1440) return 'lg';
  if (width >= 1024) return 'md';
  if (width >= 768) return 'sm';
  if (width >= 393) return 'xs';
  return 'default';
}
console.log('当前断点:', getCurrentBreakpoint());
```

## 注意事项

1. **类名顺序很重要**：后面的类会覆盖前面的类
   ```html
   <!-- ✅ 正确：从小到大 -->
   <div class="d-block d-sm-none d-md-block">
   
   <!-- ❌ 错误：从大到小会被覆盖 -->
   <div class="d-md-block d-sm-none d-block">
   ```

2. **使用容器类**：使用 `container-responsive` 而不是固定的 `container`

3. **测试所有断点**：确保在每个断点下都测试页面显示效果

4. **性能考虑**：避免过度使用工具类，必要时使用自定义CSS

