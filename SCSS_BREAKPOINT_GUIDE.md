# SCSS 断点使用指南

## 📋 目录
1. [断点定义](#断点定义)
2. [基本使用方法](#基本使用方法)
3. [实际示例](#实际示例)
4. [最佳实践](#最佳实践)
5. [常见问题](#常见问题)

---

## 🎯 断点定义

在 `src/styles/main.scss` 文件中，我们定义了以下断点：

```scss
// 断点定义
$breakpoint-xs: 393px;   // 小手机
$breakpoint-sm: 768px;   // 平板
$breakpoint-md: 1024px;  // 小桌面
$breakpoint-lg: 1440px;  // 桌面
$breakpoint-xl: 1920px;  // 大桌面
$breakpoint-2xl: 2560px; // 超大桌面
```

## 🔧 基本使用方法

### 1. 使用 `@include respond-to()` Mixin

这是最常用的方式，用于在特定断点及以上应用样式：

```scss
.element {
  // 基础样式（移动端优先）
  font-size: 1rem;
  padding: 1rem;

  // 在 sm 断点（768px）及以上应用
  @include respond-to(sm) {
    font-size: 1.125rem;
    padding: 1.5rem;
  }

  // 在 md 断点（1024px）及以上应用
  @include respond-to(md) {
    font-size: 1.25rem;
    padding: 2rem;
  }

  // 在 lg 断点（1440px）及以上应用
  @include respond-to(lg) {
    font-size: 1.5rem;
    padding: 2.5rem;
  }
}
```

**编译后的 CSS：**
```css
.element {
  font-size: 1rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .element {
    font-size: 1.125rem;
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .element {
    font-size: 1.25rem;
    padding: 2rem;
  }
}

@media (min-width: 1440px) {
  .element {
    font-size: 1.5rem;
    padding: 2.5rem;
  }
}
```

### 2. 可用的断点参数

- `xs` - 393px 及以上
- `sm` - 768px 及以上
- `md` - 1024px 及以上
- `lg` - 1440px 及以上
- `xl` - 1920px 及以上
- `2xl` - 2560px 及以上

---

## 📝 实际示例

### 示例 1: 响应式字体大小

```scss
.title {
  font-size: 1.5rem;  // 默认（移动端）

  @include respond-to(xs) {
    font-size: 1.875rem;  // 393px+
  }

  @include respond-to(sm) {
    font-size: 2.25rem;   // 768px+
  }

  @include respond-to(md) {
    font-size: 3rem;      // 1024px+
  }

  @include respond-to(lg) {
    font-size: 3.75rem;   // 1440px+
  }

  @include respond-to(xl) {
    font-size: 4.5rem;    // 1920px+
  }
}
```

### 示例 2: 响应式布局（Grid）

```scss
.grid-container {
  display: grid;
  grid-template-columns: 1fr;  // 移动端：单列
  gap: 1rem;

  @include respond-to(sm) {
    grid-template-columns: repeat(2, 1fr);  // 平板：2列
    gap: 1.5rem;
  }

  @include respond-to(md) {
    grid-template-columns: repeat(3, 1fr);  // 桌面：3列
    gap: 2rem;
  }

  @include respond-to(lg) {
    grid-template-columns: repeat(4, 1fr);  // 大桌面：4列
    gap: 2.5rem;
  }
}
```

### 示例 3: 响应式间距

```scss
.section {
  padding: 1.5rem 0;  // 移动端

  @include respond-to(sm) {
    padding: 2rem 0;  // 768px+
  }

  @include respond-to(md) {
    padding: 2.5rem 0;  // 1024px+
  }

  @include respond-to(lg) {
    padding: 3rem 0;  // 1440px+
  }

  @include respond-to(xl) {
    padding: 4rem 0;  // 1920px+
  }
}
```

### 示例 4: 响应式显示/隐藏

```scss
.mobile-menu {
  display: block;  // 移动端显示

  @include respond-to(md) {
    display: none;  // 桌面端隐藏
  }
}

.desktop-nav {
  display: none;  // 移动端隐藏

  @include respond-to(md) {
    display: flex;  // 桌面端显示
  }
}
```

### 示例 5: 嵌套使用

```scss
.card {
  padding: 1rem;

  .card-title {
    font-size: 1.25rem;

    @include respond-to(sm) {
      font-size: 1.5rem;
    }

    @include respond-to(md) {
      font-size: 1.875rem;
    }
  }

  .card-content {
    font-size: 0.875rem;

    @include respond-to(sm) {
      font-size: 1rem;
    }
  }
}
```

---

## 💡 最佳实践

### 1. 移动端优先（Mobile First）

始终从移动端样式开始，然后逐步增强：

```scss
// ✅ 正确：移动端优先
.button {
  padding: 0.5rem 1rem;  // 移动端
  font-size: 0.875rem;

  @include respond-to(sm) {
    padding: 0.75rem 1.5rem;  // 平板
    font-size: 1rem;
  }

  @include respond-to(md) {
    padding: 1rem 2rem;  // 桌面
    font-size: 1.125rem;
  }
}

// ❌ 错误：桌面端优先
.button {
  padding: 1rem 2rem;  // 桌面端
  font-size: 1.125rem;

  @media (max-width: 1023px) {
    padding: 0.5rem 1rem;  // 移动端
    font-size: 0.875rem;
  }
}
```

### 2. 按顺序使用断点

按照从小到大的顺序使用断点，这样代码更易读：

```scss
// ✅ 正确：从小到大
.element {
  width: 100%;

  @include respond-to(sm) {
    width: 50%;
  }

  @include respond-to(md) {
    width: 33.333%;
  }

  @include respond-to(lg) {
    width: 25%;
  }
}

// ❌ 不推荐：顺序混乱
.element {
  width: 100%;

  @include respond-to(lg) {
    width: 25%;
  }

  @include respond-to(sm) {
    width: 50%;
  }
}
```

### 3. 组合多个属性

在同一个断点内可以同时修改多个属性：

```scss
.card {
  padding: 1rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;

  @include respond-to(md) {
    padding: 1.5rem;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
}
```

### 4. 使用变量保持一致性

```scss
// 定义间距变量
$spacing-xs: 0.5rem;
$spacing-sm: 1rem;
$spacing-md: 1.5rem;
$spacing-lg: 2rem;

.section {
  padding: $spacing-sm;

  @include respond-to(md) {
    padding: $spacing-md;
  }

  @include respond-to(lg) {
    padding: $spacing-lg;
  }
}
```

---

## ❓ 常见问题

### Q1: 如何实现"仅在某个断点范围内"的样式？

当前 mixin 使用的是 `min-width`（大于等于），如果需要"仅在某个范围内"，可以这样：

```scss
// 仅在 sm 到 md 之间（768px - 1023px）
.element {
  @include respond-to(sm) {
    // 768px 及以上
  }

  @include respond-to(md) {
    // 1024px 及以上，覆盖上面的样式
    // 或者使用 max-width
  }
}

// 如果需要"仅在某个范围内"，可以添加新的 mixin：
@mixin respond-between($min, $max) {
  @media (min-width: $min) and (max-width: $max) {
    @content;
  }
}

// 使用
.element {
  @include respond-between(768px, 1023px) {
    // 仅在 768px 到 1023px 之间
  }
}
```

### Q2: 如何实现"最大宽度"（max-width）？

如果需要"仅在小于某个断点时"应用样式，可以添加新的 mixin：

```scss
@mixin respond-below($breakpoint) {
  @if $breakpoint == sm {
    @media (max-width: 767px) { @content; }
  }
  @if $breakpoint == md {
    @media (max-width: 1023px) { @content; }
  }
  // ... 其他断点
}

// 使用
.mobile-only {
  @include respond-below(md) {
    display: block;  // 仅在小于 1024px 时显示
  }
}
```

### Q3: 可以嵌套多个断点吗？

可以，但要注意顺序和逻辑：

```scss
.element {
  @include respond-to(sm) {
    font-size: 1rem;

    @include respond-to(md) {
      font-size: 1.25rem;  // 在 md 及以上时，会覆盖 sm 的样式
    }
  }
}
```

### Q4: 断点值可以自定义吗？

可以，直接修改变量值：

```scss
// 修改断点值
$breakpoint-sm: 600px;  // 从 768px 改为 600px
```

---

## 🎨 完整示例

```scss
// 一个完整的响应式组件示例
.product-card {
  // 基础样式（移动端）
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;

  // 图片区域
  .product-image {
    width: 100%;
    height: 200px;

    @include respond-to(sm) {
      height: 250px;
    }

    @include respond-to(md) {
      height: 300px;
    }
  }

  // 标题
  .product-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;

    @include respond-to(sm) {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }

    @include respond-to(md) {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
  }

  // 描述
  .product-description {
    font-size: 0.875rem;
    line-height: 1.5;

    @include respond-to(sm) {
      font-size: 1rem;
    }
  }

  // 按钮
  .product-button {
    width: 100%;
    padding: 0.75rem;

    @include respond-to(sm) {
      width: auto;
      padding: 0.75rem 1.5rem;
    }
  }
}
```

---

## 📚 总结

1. **使用 `@include respond-to(断点名称)`** 来应用响应式样式
2. **移动端优先**：先写基础样式，再逐步增强
3. **按顺序使用**：从小到大使用断点，代码更清晰
4. **可以嵌套**：在断点内可以继续嵌套其他样式
5. **组合属性**：在同一个断点内可以修改多个属性

记住：**移动端优先，逐步增强**（Mobile First, Progressive Enhancement）！

