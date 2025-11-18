# Tailwind CSS 响应式属性速查表

## 📱 断点前缀

- `xs:` - ≥393px (手机)
- `sm:` - ≥768px (平板)
- `md:` - ≥1024px (小桌面)
- `lg:` - ≥1440px (桌面)
- `xl:` - ≥1920px (大桌面)
- `2xl:` - ≥2560px (超大桌面)

## 🎨 常用响应式属性

### 1. 显示/隐藏 (Display)

```html
<!-- 默认隐藏，≥768px 显示 -->
<div class="hidden sm:block">内容</div>

<!-- 默认显示，≥1024px 隐藏 -->
<div class="block md:hidden">内容</div>

<!-- 响应式 flex -->
<div class="flex flex-col sm:flex-row">内容</div>
```

**CSS 对应：**
```css
/* 普通 CSS */
.hidden-sm { display: none; }
@media (min-width: 768px) {
  .hidden-sm { display: block; }
}

/* Tailwind */
class="hidden sm:block"
```

---

### 2. 文本大小 (Font Size)

```html
<!-- 响应式文本大小 -->
<h1 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  标题
</h1>
```

**CSS 对应：**
```css
/* 普通 CSS */
h1 {
  font-size: 1rem; /* text-base */
}
@media (min-width: 768px) {
  h1 { font-size: 1.125rem; } /* sm:text-lg */
}
@media (min-width: 1024px) {
  h1 { font-size: 1.25rem; } /* md:text-xl */
}

/* Tailwind */
class="text-base sm:text-lg md:text-xl"
```

---

### 3. 内边距 (Padding)

```html
<!-- 响应式内边距 -->
<div class="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
  内容
</div>

<!-- 单独方向 -->
<div class="pl-4 sm:pl-6 md:pl-8">左边距</div>
<div class="pt-2 sm:pt-4 md:pt-6">上边距</div>
<div class="px-4 sm:px-6 md:px-8">水平边距</div>
<div class="py-2 sm:py-4 md:py-6">垂直边距</div>
```

**CSS 对应：**
```css
/* 普通 CSS */
div {
  padding: 0.5rem; /* p-2 */
}
@media (min-width: 768px) {
  div { padding: 1rem; } /* sm:p-4 */
}
@media (min-width: 1024px) {
  div { padding: 1.5rem; } /* md:p-6 */
}

/* Tailwind */
class="p-2 sm:p-4 md:p-6"
```

---

### 4. 外边距 (Margin)

```html
<!-- 响应式外边距 -->
<div class="m-2 sm:m-4 md:m-6 lg:m-8">
  内容
</div>

<!-- 单独方向 -->
<div class="ml-4 sm:ml-6 md:ml-8">左边距</div>
<div class="mt-2 sm:mt-4 md:mt-6">上边距</div>
<div class="mx-auto">水平居中</div>
```

**CSS 对应：**
```css
/* 普通 CSS */
div {
  margin: 0.5rem; /* m-2 */
}
@media (min-width: 768px) {
  div { margin: 1rem; } /* sm:m-4 */
}

/* Tailwind */
class="m-2 sm:m-4"
```

---

### 5. 宽度 (Width)

```html
<!-- 响应式宽度 -->
<div class="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
  内容
</div>

<!-- 百分比宽度 -->
<div class="w-[50%] sm:w-[60%] md:w-[70%]">
  内容
</div>
```

**CSS 对应：**
```css
/* 普通 CSS */
div {
  width: 100%; /* w-full */
}
@media (min-width: 768px) {
  div { width: 75%; } /* sm:w-3/4 */
}
@media (min-width: 1024px) {
  div { width: 50%; } /* md:w-1/2 */
}

/* Tailwind */
class="w-full sm:w-3/4 md:w-1/2"
```

---

### 6. 高度 (Height)

```html
<!-- 响应式高度 -->
<div class="h-32 sm:h-48 md:h-64 lg:h-96">
  内容
</div>

<!-- 视口高度 -->
<div class="h-screen sm:h-[80vh] md:h-[60vh]">
  内容
</div>
```

---

### 7. Flexbox 布局

```html
<!-- 响应式 flex 方向 -->
<div class="flex flex-col sm:flex-row">
  <div>项目1</div>
  <div>项目2</div>
</div>

<!-- 响应式对齐 -->
<div class="flex justify-start sm:justify-center md:justify-between">
  内容
</div>

<div class="flex items-start sm:items-center md:items-end">
  内容
</div>

<!-- 响应式 gap -->
<div class="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
  内容
</div>
```

**CSS 对应：**
```css
/* 普通 CSS */
div {
  display: flex;
  flex-direction: column; /* flex-col */
  gap: 0.5rem; /* gap-2 */
}
@media (min-width: 768px) {
  div {
    flex-direction: row; /* sm:flex-row */
    gap: 1rem; /* sm:gap-4 */
  }
}

/* Tailwind */
class="flex flex-col sm:flex-row gap-2 sm:gap-4"
```

---

### 8. 网格布局 (Grid)

```html
<!-- 响应式网格列数 -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>卡片1</div>
  <div>卡片2</div>
  <div>卡片3</div>
  <div>卡片4</div>
</div>
```

**CSS 对应：**
```css
/* 普通 CSS */
div {
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 1rem; /* gap-4 */
}
@media (min-width: 768px) {
  div { grid-template-columns: repeat(2, 1fr); } /* sm:grid-cols-2 */
}
@media (min-width: 1024px) {
  div { grid-template-columns: repeat(3, 1fr); } /* md:grid-cols-3 */
}

/* Tailwind */
class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
```

---

### 9. 定位 (Position)

```html
<!-- 响应式定位 -->
<div class="static sm:relative md:absolute lg:fixed">
  内容
</div>

<!-- 响应式位置 -->
<div class="top-0 sm:top-4 md:top-8">
  内容
</div>
<div class="left-0 sm:left-1/4 md:left-1/2">
  内容
</div>
```

---

### 10. 字体粗细 (Font Weight)

```html
<!-- 响应式字重 -->
<p class="font-normal sm:font-medium md:font-bold">
  文本
</p>
```

---

### 11. 文本对齐 (Text Align)

```html
<!-- 响应式对齐 -->
<p class="text-left sm:text-center md:text-right">
  文本
</p>
```

---

### 12. 圆角 (Border Radius)

```html
<!-- 响应式圆角 -->
<div class="rounded-none sm:rounded-md md:rounded-lg lg:rounded-xl">
  内容
</div>
```

---

### 13. 阴影 (Box Shadow)

```html
<!-- 响应式阴影 -->
<div class="shadow-none sm:shadow-md md:shadow-lg lg:shadow-xl">
  内容
</div>
```

---

### 14. 透明度 (Opacity)

```html
<!-- 响应式透明度 -->
<div class="opacity-100 sm:opacity-90 md:opacity-80">
  内容
</div>
```

---

### 15. 自定义值 (Arbitrary Values)

```html
<!-- 使用任意值 -->
<div class="w-[50%] sm:w-[60%] md:w-[70%]">
  内容
</div>

<div class="p-[10px] sm:p-[15px] md:p-[20px]">
  内容
</div>

<div class="text-[14px] sm:text-[16px] md:text-[18px]">
  文本
</div>

<!-- 百分比 -->
<div class="pl-[8.333%] sm:pl-[10%] md:pl-[12%]">
  内容
</div>
```

---

## 🔄 CSS 转 Tailwind 转换表

### 间距转换

| CSS | Tailwind | 说明 |
|-----|----------|------|
| `padding: 0.25rem` | `p-1` | 4px |
| `padding: 0.5rem` | `p-2` | 8px |
| `padding: 1rem` | `p-4` | 16px |
| `padding: 1.5rem` | `p-6` | 24px |
| `padding: 2rem` | `p-8` | 32px |
| `padding: 3rem` | `p-12` | 48px |
| `padding: 10px` | `p-[10px]` | 自定义值 |
| `padding: 8.333%` | `p-[8.333%]` | 百分比 |

### 字体大小转换

| CSS | Tailwind | 说明 |
|-----|----------|------|
| `font-size: 0.75rem` | `text-xs` | 12px |
| `font-size: 0.875rem` | `text-sm` | 14px |
| `font-size: 1rem` | `text-base` | 16px |
| `font-size: 1.125rem` | `text-lg` | 18px |
| `font-size: 1.25rem` | `text-xl` | 20px |
| `font-size: 1.5rem` | `text-2xl` | 24px |
| `font-size: 1.875rem` | `text-3xl` | 30px |
| `font-size: 2.25rem` | `text-4xl` | 36px |
| `font-size: 14px` | `text-[14px]` | 自定义值 |

### 宽度/高度转换

| CSS | Tailwind | 说明 |
|-----|----------|------|
| `width: 100%` | `w-full` | 全宽 |
| `width: 50%` | `w-1/2` | 一半 |
| `width: 33.333%` | `w-1/3` | 三分之一 |
| `width: 25%` | `w-1/4` | 四分之一 |
| `width: 75%` | `w-3/4` | 四分之三 |
| `width: 50px` | `w-[50px]` | 自定义值 |
| `width: 8.333%` | `w-[8.333%]` | 百分比 |

### Flexbox 转换

| CSS | Tailwind |
|-----|----------|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `flex-direction: row` | `flex-row` |
| `justify-content: center` | `justify-center` |
| `justify-content: space-between` | `justify-between` |
| `align-items: center` | `items-center` |
| `gap: 1rem` | `gap-4` |

---

## 💡 实用示例

### 示例 1: 响应式卡片

**普通 CSS:**
```css
.card {
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
}

@media (min-width: 768px) {
  .card {
    padding: 1.5rem;
    width: 50%;
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .card {
    padding: 2rem;
    width: 33.333%;
    font-size: 1.25rem;
  }
}
```

**Tailwind CSS:**
```html
<div class="card p-4 w-full text-base sm:p-6 sm:w-1/2 sm:text-lg md:p-8 md:w-1/3 md:text-xl">
  卡片内容
</div>
```

---

### 示例 2: 响应式导航

**普通 CSS:**
```css
.nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    gap: 2rem;
    padding: 1.5rem;
  }
}
```

**Tailwind CSS:**
```html
<nav class="flex flex-col gap-4 p-4 sm:flex-row sm:gap-8 sm:p-6">
  导航内容
</nav>
```

---

### 示例 3: 响应式标题

**普通 CSS:**
```css
.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: left;
}

@media (min-width: 768px) {
  .title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
}
```

**Tailwind CSS:**
```html
<h1 class="title text-2xl mb-4 text-left sm:text-3xl sm:mb-6 sm:text-center md:text-4xl md:mb-8">
  标题
</h1>
```

---

## 🎯 快速转换技巧

1. **查找对应类名**: 使用上面的转换表
2. **添加断点前缀**: 在类名前加 `sm:`, `md:`, `lg:` 等
3. **自定义值**: 使用 `[值]` 语法，如 `w-[50px]`, `p-[10px]`
4. **组合使用**: 多个类名用空格分隔
5. **移动优先**: 默认样式针对最小屏幕，然后逐步增强

---

## 📝 转换工具提示

如果你有普通 CSS 代码，可以：
1. 复制 CSS 代码给我
2. 我会帮你转换成 Tailwind CSS 类名
3. 或者参考上面的转换表自己转换

