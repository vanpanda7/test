# Tailwind CSS 转 CSS 对照说明文档

本文档将项目中使用的 Tailwind CSS 类转换为对应的传统 CSS，方便理解每个样式的作用。

## 目录
1. [布局类 (Layout)](#布局类)
2. [间距类 (Spacing)](#间距类)
3. [颜色类 (Colors)](#颜色类)
4. [字体类 (Typography)](#字体类)
5. [响应式断点](#响应式断点)
6. [组件样式对照](#组件样式对照)

---

## 布局类

### 容器和宽度

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `w-full` | `width: 100%;` | 宽度100% |
| `h-full` | `height: 100%;` | 高度100% |
| `container` | `width: 100%; margin-left: auto; margin-right: auto;` | 响应式容器，自动居中 |
| `mx-auto` | `margin-left: auto; margin-right: auto;` | 水平居中 |

### 定位

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `relative` | `position: relative;` | 相对定位 |
| `absolute` | `position: absolute;` | 绝对定位 |
| `fixed` | `position: fixed;` | 固定定位 |
| `inset-0` | `top: 0; right: 0; bottom: 0; left: 0;` | 四个方向都为0 |

### Flexbox

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `flex` | `display: flex;` | 弹性布局 |
| `flex-col` | `flex-direction: column;` | 纵向排列 |
| `flex-row` | `flex-direction: row;` | 横向排列 |
| `items-center` | `align-items: center;` | 垂直居中 |
| `items-start` | `align-items: flex-start;` | 垂直顶部对齐 |
| `items-end` | `align-items: flex-end;` | 垂直底部对齐 |
| `justify-between` | `justify-content: space-between;` | 两端对齐 |
| `justify-center` | `justify-content: center;` | 水平居中 |
| `gap-6` | `gap: 1.5rem;` (24px) | 间距1.5rem |

### Grid

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `grid` | `display: grid;` | 网格布局 |
| `grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` | 1列 |
| `grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` | 2列 |
| `md:grid-cols-2` | `@media (min-width: 1024px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }` | 中等屏幕2列 |

---

## 间距类

### 内边距 (Padding)

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `p-6` | `padding: 1.5rem;` (24px) | 四周内边距1.5rem |
| `px-4` | `padding-left: 1rem; padding-right: 1rem;` | 左右内边距 |
| `py-3` | `padding-top: 0.75rem; padding-bottom: 0.75rem;` | 上下内边距 |
| `px-6` | `padding-left: 1.5rem; padding-right: 1.5rem;` | 左右内边距1.5rem |
| `py-8` | `padding-top: 2rem; padding-bottom: 2rem;` | 上下内边距2rem |
| `md:px-8` | `@media (min-width: 1024px) { padding-left: 2rem; padding-right: 2rem; }` | 中等屏幕左右内边距 |

### 外边距 (Margin)

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `mb-4` | `margin-bottom: 1rem;` (16px) | 下边距1rem |
| `mb-6` | `margin-bottom: 1.5rem;` (24px) | 下边距1.5rem |
| `mb-12` | `margin-bottom: 3rem;` (48px) | 下边距3rem |
| `mt-8` | `margin-top: 2rem;` | 上边距2rem |

---

## 颜色类

### 背景色

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `bg-[#F2F2F2]` | `background-color: #F2F2F2;` | 浅灰色背景 |
| `bg-[#1D1D1D]` | `background-color: #1D1D1D;` | 深色背景 |
| `bg-white` | `background-color: #FFFFFF;` | 白色背景 |

### 文字颜色

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `text-white` | `color: #FFFFFF;` | 白色文字 |
| `text-[#1D1D1D]` | `color: #1D1D1D;` | 深色文字 |
| `text-white/60` | `color: rgba(255, 255, 255, 0.6);` | 60%透明度的白色 |

### 边框颜色

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `border-[#1D1D1D]/10` | `border-color: rgba(29, 29, 29, 0.1);` | 10%透明度的深色边框 |
| `border-white/10` | `border-color: rgba(255, 255, 255, 0.1);` | 10%透明度的白色边框 |
| `border-white/20` | `border-color: rgba(255, 255, 255, 0.2);` | 20%透明度的白色边框 |

---

## 字体类

### 字体大小

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `text-sm` | `font-size: 0.875rem;` (14px) | 小号字体 |
| `text-base` | `font-size: 1rem;` (16px) | 基础字体 |
| `text-lg` | `font-size: 1.125rem;` (18px) | 大号字体 |
| `text-2xl` | `font-size: 1.5rem;` (24px) | 2倍基础大小 |
| `text-3xl` | `font-size: 1.875rem;` (30px) | 3倍基础大小 |
| `text-4xl` | `font-size: 2.25rem;` (36px) | 4倍基础大小 |
| `text-5xl` | `font-size: 3rem;` (48px) | 5倍基础大小 |
| `text-6xl` | `font-size: 3.75rem;` (60px) | 6倍基础大小 |
| `text-7xl` | `font-size: 4.5rem;` (72px) | 7倍基础大小 |

### 响应式字体大小

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` | ```css<br>font-size: 1.875rem;<br>@media (min-width: 768px) { font-size: 2.25rem; }<br>@media (min-width: 1024px) { font-size: 3rem; }<br>@media (min-width: 1440px) { font-size: 3.75rem; }<br>``` | 响应式字体大小 |

### 字体粗细

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `font-light` | `font-weight: 300;` | 细体 |
| `font-normal` | `font-weight: 400;` | 正常 |
| `font-medium` | `font-weight: 500;` | 中等 |
| `font-bold` | `font-weight: 700;` | 粗体 |

### 行高

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `leading-tight` | `line-height: 1.25;` | 紧密行高 |
| `leading-relaxed` | `line-height: 1.625;` | 宽松行高 |

---

## 响应式断点

项目使用的断点定义在 `tailwind.config.js` 中：

| 断点名称 | 最小宽度 | CSS 媒体查询 | 说明 |
|---------|---------|-------------|------|
| `xs:` | 393px | `@media (min-width: 393px)` | 小手机 |
| `sm:` | 768px | `@media (min-width: 768px)` | 平板 |
| `md:` | 1024px | `@media (min-width: 1024px)` | 小桌面 |
| `lg:` | 1440px | `@media (min-width: 1440px)` | 桌面 |
| `xl:` | 1920px | `@media (min-width: 1920px)` | 大桌面 |
| `2xl:` | 2560px | `@media (min-width: 2560px)` | 超大桌面 |

### 响应式类示例

| Tailwind 类 | CSS 等价写法 | 说明 |
|------------|--------------|------|
| `md:px-8` | `@media (min-width: 1024px) { padding-left: 2rem; padding-right: 2rem; }` | 中等屏幕及以上应用 |
| `lg:text-6xl` | `@media (min-width: 1440px) { font-size: 3.75rem; }` | 大屏幕字体大小 |
| `md:grid-cols-2` | `@media (min-width: 1024px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }` | 中等屏幕2列布局 |

---

## 组件样式对照

### Hero 区域

```html
<section class="relative w-full">
  <div class="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
```

**对应的 CSS：**
```css
section {
  position: relative;
  width: 100%;
}

div {
  position: relative;
  width: 100%;
  height: 400px;
}

@media (min-width: 768px) {
  div {
    height: 500px;
  }
}

@media (min-width: 1024px) {
  div {
    height: 600px;
  }
}

@media (min-width: 1440px) {
  div {
    height: 700px;
  }
}

@media (min-width: 1920px) {
  div {
    height: 800px;
  }
}
```

### 产品卡片

```html
<div class="bg-white border border-[#1D1D1D]/10 rounded-2xl overflow-hidden">
```

**对应的 CSS：**
```css
div {
  background-color: #FFFFFF;
  border: 1px solid rgba(29, 29, 29, 0.1);
  border-radius: 1rem; /* 16px */
  overflow: hidden;
}
```

### Discover 按钮

```html
<button class="btn-discover bg-[#1D1D1D] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg">
```

**对应的 CSS：**
```css
.btn-discover {
  background-color: #1D1D1D;
  color: #FFFFFF;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.5rem; /* 8px */
  transition: all 0.3s;
}

@media (min-width: 1024px) {
  .btn-discover {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.btn-discover:hover {
  background-color: #FFFFFF;
  color: #1D1D1D;
}
```

### 页脚链接

```html
<a href="/about/" class="text-white text-sm hover:opacity-80 transition-opacity">
```

**对应的 CSS：**
```css
a {
  color: #FFFFFF;
  font-size: 0.875rem;
  transition: opacity 0.3s;
}

a:hover {
  opacity: 0.8;
}
```

---

## 常用组合示例

### 响应式容器

```html
<div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
```

**对应的 CSS：**
```css
div {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  div {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  div {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1440px) {
  div {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1920px) {
  div {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
```

### 响应式标题

```html
<h1 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
```

**对应的 CSS：**
```css
h1 {
  color: #FFFFFF;
  font-size: 1.875rem; /* 30px */
  font-weight: 300;
  line-height: 1.25;
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.25rem; /* 36px */
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3rem; /* 48px */
  }
}

@media (min-width: 1440px) {
  h1 {
    font-size: 3.75rem; /* 60px */
  }
}

@media (min-width: 1920px) {
  h1 {
    font-size: 4.5rem; /* 72px */
  }
}
```

---

## 快速参考

### 间距换算表

| Tailwind 值 | rem | px | 说明 |
|------------|-----|-----|------|
| `1` | 0.25rem | 4px | 最小间距 |
| `2` | 0.5rem | 8px | 小间距 |
| `4` | 1rem | 16px | 基础间距 |
| `6` | 1.5rem | 24px | 中等间距 |
| `8` | 2rem | 32px | 大间距 |
| `12` | 3rem | 48px | 超大间距 |
| `16` | 4rem | 64px | 巨大间距 |

### 颜色透明度

| Tailwind 语法 | CSS 等价 | 说明 |
|--------------|---------|------|
| `text-white/60` | `rgba(255, 255, 255, 0.6)` | 60%透明度 |
| `border-[#1D1D1D]/10` | `rgba(29, 29, 29, 0.1)` | 10%透明度 |
| `bg-white/20` | `rgba(255, 255, 255, 0.2)` | 20%透明度 |

---

## 总结

- **Tailwind CSS 的优势**：快速开发，响应式设计简单，类名直观
- **转换方法**：每个 Tailwind 类对应一个或多个 CSS 属性
- **响应式**：使用 `sm:`, `md:`, `lg:` 等前缀实现不同屏幕尺寸的样式
- **自定义值**：使用方括号 `[]` 可以设置任意值，如 `bg-[#F2F2F2]`

如需更多帮助，请参考 [Tailwind CSS 官方文档](https://tailwindcss.com/docs)

