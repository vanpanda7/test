# CSS 转 Tailwind CSS 转换指南

## 🔄 转换流程

### 步骤 1: 识别 CSS 属性
找出 CSS 中的属性：`padding`, `margin`, `font-size`, `width` 等

### 步骤 2: 查找 Tailwind 对应类名
参考转换表找到对应的 Tailwind 类名

### 步骤 3: 添加响应式前缀
如果需要响应式，添加 `sm:`, `md:`, `lg:` 等前缀

### 步骤 4: 组合类名
用空格分隔多个类名

---

## 📋 完整转换示例

### 示例 1: 响应式容器

**原始 CSS:**
```css
.container {
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    max-width: 1400px;
  }
}
```

**转换后的 Tailwind:**
```html
<div class="w-full p-4 mx-auto max-w-6xl sm:p-8 md:p-12 md:max-w-7xl">
  内容
</div>
```

**说明:**
- `width: 100%` → `w-full`
- `padding: 1rem` → `p-4`
- `margin: 0 auto` → `mx-auto`
- `max-width: 1200px` → `max-w-6xl` (约 1152px)
- `max-width: 1400px` → `max-w-7xl` (约 1280px)

---

### 示例 2: 响应式按钮

**原始 CSS:**
```css
.button {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 8px;
  background-color: #1D1D1D;
  color: #FFFFFF;
}

@media (min-width: 768px) {
  .button {
    padding: 13px 25px;
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .button {
    padding: 15px 30px;
    font-size: 18px;
  }
}
```

**转换后的 Tailwind:**
```html
<button class="px-5 py-[10px] text-sm rounded-lg bg-[#1D1D1D] text-white sm:px-6 sm:py-[13px] sm:text-base md:px-7 md:py-[15px] md:text-lg">
  按钮
</button>
```

**说明:**
- `padding: 10px 20px` → `px-5 py-[10px]` (px-5 = 1.25rem = 20px)
- `font-size: 14px` → `text-sm`
- `border-radius: 8px` → `rounded-lg`
- 自定义值使用 `[值]` 语法

---

### 示例 3: 响应式网格

**原始 CSS:**
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

**转换后的 Tailwind:**
```html
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
  <div>卡片1</div>
  <div>卡片2</div>
  <div>卡片3</div>
</div>
```

---

### 示例 4: 响应式文本和间距

**原始 CSS:**
```css
.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 8.333%;
}

@media (min-width: 768px) {
  .title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
}
```

**转换后的 Tailwind:**
```html
<h1 class="text-2xl mb-4 pl-[8.333%] sm:text-3xl sm:mb-6 md:text-4xl md:mb-8">
  标题
</h1>
```

---

## 🛠️ 常用转换规则

### 间距 (Spacing)

| CSS 值 | Tailwind | 实际像素 |
|--------|----------|----------|
| `0` | `p-0`, `m-0` | 0px |
| `0.25rem` | `p-1`, `m-1` | 4px |
| `0.5rem` | `p-2`, `m-2` | 8px |
| `0.75rem` | `p-3`, `m-3` | 12px |
| `1rem` | `p-4`, `m-4` | 16px |
| `1.5rem` | `p-6`, `m-6` | 24px |
| `2rem` | `p-8`, `m-8` | 32px |
| `3rem` | `p-12`, `m-12` | 48px |
| `4rem` | `p-16`, `m-16` | 64px |

**自定义值:**
- `padding: 10px` → `p-[10px]`
- `padding: 8.333%` → `p-[8.333%]`
- `margin: 15px` → `m-[15px]`

### 方向性间距

| CSS | Tailwind |
|-----|----------|
| `padding-top: 1rem` | `pt-4` |
| `padding-bottom: 1rem` | `pb-4` |
| `padding-left: 1rem` | `pl-4` |
| `padding-right: 1rem` | `pr-4` |
| `padding: 1rem 2rem` | `py-4 px-8` |
| `margin-top: 1rem` | `mt-4` |
| `margin-left: auto` | `ml-auto` |
| `margin: 0 auto` | `mx-auto` |

### 字体大小

| CSS | Tailwind | 实际大小 |
|-----|----------|----------|
| `0.75rem` | `text-xs` | 12px |
| `0.875rem` | `text-sm` | 14px |
| `1rem` | `text-base` | 16px |
| `1.125rem` | `text-lg` | 18px |
| `1.25rem` | `text-xl` | 20px |
| `1.5rem` | `text-2xl` | 24px |
| `1.875rem` | `text-3xl` | 30px |
| `2.25rem` | `text-4xl` | 36px |
| `3rem` | `text-5xl` | 48px |
| `3.75rem` | `text-6xl` | 60px |

**自定义值:**
- `font-size: 14px` → `text-[14px]`
- `font-size: 1.8rem` → `text-[1.8rem]`

### 宽度和高度

| CSS | Tailwind |
|-----|----------|
| `width: 100%` | `w-full` |
| `width: 50%` | `w-1/2` |
| `width: 33.333%` | `w-1/3` |
| `width: 25%` | `w-1/4` |
| `width: 75%` | `w-3/4` |
| `width: auto` | `w-auto` |
| `max-width: 1200px` | `max-w-6xl` |
| `height: 100vh` | `h-screen` |
| `height: 100%` | `h-full` |

**自定义值:**
- `width: 50px` → `w-[50px]`
- `width: 8.333%` → `w-[8.333%]`
- `max-width: 1400px` → `max-w-[1400px]`

### Flexbox

| CSS | Tailwind |
|-----|----------|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `flex-direction: row` | `flex-row` |
| `justify-content: center` | `justify-center` |
| `justify-content: space-between` | `justify-between` |
| `justify-content: flex-start` | `justify-start` |
| `justify-content: flex-end` | `justify-end` |
| `align-items: center` | `items-center` |
| `align-items: flex-start` | `items-start` |
| `align-items: flex-end` | `items-end` |
| `gap: 1rem` | `gap-4` |

### Grid

| CSS | Tailwind |
|-----|----------|
| `display: grid` | `grid` |
| `grid-template-columns: 1fr` | `grid-cols-1` |
| `grid-template-columns: repeat(2, 1fr)` | `grid-cols-2` |
| `grid-template-columns: repeat(3, 1fr)` | `grid-cols-3` |
| `gap: 1rem` | `gap-4` |

### 定位

| CSS | Tailwind |
|-----|----------|
| `position: relative` | `relative` |
| `position: absolute` | `absolute` |
| `position: fixed` | `fixed` |
| `position: sticky` | `sticky` |
| `top: 0` | `top-0` |
| `left: 0` | `left-0` |
| `right: 0` | `right-0` |
| `bottom: 0` | `bottom-0` |
| `left: 50%` | `left-1/2` |
| `left: 16.666%` | `left-1/6` |

### 文本

| CSS | Tailwind |
|-----|----------|
| `text-align: left` | `text-left` |
| `text-align: center` | `text-center` |
| `text-align: right` | `text-right` |
| `font-weight: normal` | `font-normal` |
| `font-weight: bold` | `font-bold` |
| `font-weight: 500` | `font-medium` |
| `color: #fff` | `text-white` |
| `color: #000` | `text-black` |
| `text-decoration: none` | `no-underline` |

### 背景和边框

| CSS | Tailwind |
|-----|----------|
| `background-color: #1D1D1D` | `bg-[#1D1D1D]` |
| `background-color: white` | `bg-white` |
| `border-radius: 8px` | `rounded-lg` |
| `border-radius: 0.5rem` | `rounded-lg` |
| `border: none` | `border-none` |
| `border: 1px solid` | `border` |

---

## 💡 转换技巧

1. **移动优先**: 默认样式写在最前面，然后添加响应式前缀
2. **组合类名**: 多个属性用空格分隔
3. **自定义值**: 使用 `[值]` 语法，如 `w-[50px]`, `p-[10px]`
4. **百分比**: 直接使用 `[8.333%]` 这样的语法
5. **简写**: Tailwind 有很多简写，如 `mx-auto` = `margin: 0 auto`

---

## 🎯 实际转换示例

### 你的标题样式转换

**原始需求:**
```css
.title-container {
  padding-left: 8.333%; /* 1/12 */
}
```

**Tailwind:**
```html
<div class="pl-[8.333%]">
  标题
</div>
```

**如果需要响应式:**
```html
<div class="pl-[4%] sm:pl-[6%] md:pl-[8.333%] lg:pl-[8.333%]">
  标题
</div>
```

---

## 📝 需要转换？直接给我 CSS 代码！

如果你有 CSS 代码需要转换，直接发给我，我会帮你转换成 Tailwind CSS！

例如：
```css
/* 你的 CSS */
.my-element {
  padding: 1rem;
  font-size: 1.25rem;
  width: 100%;
}

@media (min-width: 768px) {
  .my-element {
    padding: 2rem;
    font-size: 1.5rem;
    width: 50%;
  }
}
```

我会转换成：
```html
<div class="my-element p-4 text-xl w-full sm:p-8 sm:text-2xl sm:w-1/2">
  内容
</div>
```

