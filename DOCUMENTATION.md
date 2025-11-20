# SCSS + Bootstrap 项目完整文档

本文档包含了项目的所有说明、配置和使用指南。

---

## 📋 目录

1. [项目介绍](#1-项目介绍)
2. [快速开始](#2-快速开始)
3. [Bootstrap 自定义配置](#3-bootstrap-自定义配置)
4. [自定义样式参考](#4-自定义样式参考)
5. [断点样式组织指南](#5-断点样式组织指南)
6. [响应式 Class 使用指南](#6-响应式-class-使用指南)
7. [自定义网格系统使用指南](#7-自定义网格系统使用指南)
8. [响应式布局方式对比](#8-响应式布局方式对比)
9. [注意事项](#9-注意事项)

---

## 1. 项目介绍

这是一个集成了 SCSS 和 Bootstrap 5 的项目模板。

### 功能特性

- ✅ **Bootstrap 5.3.3** - 最新版本的 Bootstrap 框架
- ✅ **SCSS 支持** - 使用 SCSS 编写样式，支持变量、嵌套、混入等
- ✅ **自定义配置** - 可以自定义 Bootstrap 的断点、颜色等变量
- ✅ **自动编译** - 支持 watch 模式，自动编译 SCSS 文件
- ✅ **全宽布局** - 不使用容器，直接根据页面宽度响应式
- ✅ **自定义网格系统** - 为不同断点设置不同的列数
- ✅ **按断点组织样式** - 每个断点有独立的 SCSS 文件，便于维护

### 项目结构

```
项目根目录/
├── src/
│   └── styles/
│       ├── _bootstrap-custom.scss  # Bootstrap 自定义配置
│       ├── _variables.scss          # 全局变量
│       ├── main.scss                # 主样式文件（入口）
│       └── breakpoints/             # 断点样式目录
│           ├── _index.scss          # 统一导入所有断点文件
│           ├── _xs.scss             # 0px+ (基础样式)
│           ├── _sm.scss             # 393px+
│           ├── _md.scss             # 768px+
│           ├── _lg.scss             # 1024px+
│           ├── _xl.scss             # 1440px+
│           ├── _xxl.scss            # 1920px+
│           └── _xxxl.scss           # 2560px+
├── static/
│   ├── css/
│   │   └── main.css                 # 编译后的 CSS 文件（自动生成）
│   └── js/
├── index.html                        # 主 HTML 文件
├── package.json                      # 项目配置和依赖
└── DOCUMENTATION.md                  # 完整文档（本文件）
```

---

## 2. 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

启动 watch 模式，自动编译 SCSS 文件：

```bash
npm run build-scss
```

### 生产构建

编译并压缩 CSS 文件：

```bash
npm run build-scss-prod
```

---

## 3. Bootstrap 自定义配置

**文件位置：** `src/styles/_bootstrap-custom.scss`

### 3.1 自定义断点（Breakpoints）

```scss
$grid-breakpoints: (
  xs: 0,        // 0px+ - 移动设备（最小）
  sm: 393px,    // 393px+ - 小屏幕设备
  md: 768px,    // 768px+ - 平板设备
  lg: 1024px,   // 1024px+ - 桌面设备
  xl: 1440px,   // 1440px+ - 大桌面设备
  xxl: 1920px,  // 1920px+ - 超大桌面设备
  xxxl: 2560px  // 2560px+ - 4K 显示器
);
```

**使用说明：**
- 这些断点会覆盖 Bootstrap 的默认断点
- 在媒体查询中使用：`@include media-breakpoint-up(sm) { ... }`
- 在 HTML 中使用：`col-sm-*`, `col-md-*` 等

**修改位置：** `src/styles/_bootstrap-custom.scss` 第 10-18 行

### 3.2 容器最大宽度

```scss
$container-max-widths: (
  sm: 373px,   // 小屏幕最大宽度
  md: 748px,   // 平板最大宽度
  lg: 1004px,  // 桌面最大宽度
  xl: 1420px,  // 大桌面最大宽度
  xxl: 1900px, // 超大桌面最大宽度
  xxxl: 2540px // 4K 显示器最大宽度
);
```

**注意：** 本项目不使用容器，此配置仅供参考。

**修改位置：** `src/styles/_bootstrap-custom.scss` 第 20-28 行

### 3.3 网格系统配置

```scss
$grid-columns: 12;           // Bootstrap 网格列数（默认 12 列）
$grid-gutter-width: 1rem;    // 网格间距（列之间的间距）
```

**修改位置：** `src/styles/_bootstrap-custom.scss` 第 30-34 行

### 3.4 自定义颜色

```scss
$primary: #0d6efd;    // 主色（蓝色）
$secondary: #6c757d;  // 次要色（灰色）
$success: #198754;    // 成功色（绿色）
$danger: #dc3545;     // 危险色（红色）
$warning: #ffc107;    // 警告色（黄色）
$info: #0dcaf0;       // 信息色（青色）
$light: #f8f9fa;      // 浅色（浅灰）
$dark: #212529;       // 深色（深灰）
$white: #ffffff;      // 白色
```

**使用说明：**
- 这些颜色会覆盖 Bootstrap 的默认颜色
- 在 HTML 中使用：`bg-primary`, `text-primary`, `btn-primary` 等
- 在 SCSS 中使用：`$primary`, `$secondary` 等变量

**修改位置：** `src/styles/_bootstrap-custom.scss` 第 36-45 行

### 3.5 字体设置

```scss
$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**修改位置：** `src/styles/_bootstrap-custom.scss` 第 48 行

---

## 4. 自定义样式参考

**文件位置：** `src/styles/main.scss` 和 `src/styles/_variables.scss`

### 4.1 全局变量（`_variables.scss`）

```scss
// 颜色变量
$primary-color: #0d6efd;      // 主色
$secondary-color: #6c757d;   // 次要色
$text-color: #212529;        // 文本颜色
$bg-color: #ffffff;          // 背景颜色

// 间距变量
$spacing-xs: 0.5rem;
$spacing-sm: 1rem;
$spacing-md: 1.5rem;
$spacing-lg: 2rem;
$spacing-xl: 3rem;
$spacing-xxl: 4rem;

// 字体大小变量
$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;
$font-size-xl: 1.25rem;
$font-size-2xl: 1.5rem;
$font-size-3xl: 1.875rem;
$font-size-4xl: 2.25rem;
```

**修改位置：** `src/styles/_variables.scss`

### 4.2 自定义样式类

#### `.btn-custom` - 自定义按钮

```scss
.btn-custom {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
```

**HTML 使用：**
```html
<button class="btn btn-custom btn-primary">自定义按钮</button>
```

**修改位置：** `src/styles/main.scss` 第 39-49 行

#### `.full-width-section` - 全宽区域（推荐使用）

```scss
.full-width-section {
  width: 100%;
  padding-left: 1rem;    // xs: 1rem
  padding-right: 1rem;
  box-sizing: border-box;

  // sm (393px+): 2rem
  // md (768px+): 3rem
  // lg (1024px+): 4rem
  // xl (1440px+): 5rem
}
```

**HTML 使用：**
```html
<section class="full-width-section">
  <h2>标题</h2>
  <p>内容...</p>
</section>
```

**适用场景：**
- Hero Section
- 主要内容区域
- 页脚
- 导航栏内容区域

**修改位置：** `src/styles/main.scss` 第 131-157 行

#### `.full-width-grid` - 全宽网格容器

**HTML 使用：**
```html
<div class="full-width-grid">
  <div class="custom-col custom-col-2">内容 1</div>
  <div class="custom-col custom-col-2">内容 2</div>
</div>
```

**适用场景：**
- 产品卡片网格
- 图片画廊
- 内容卡片布局

**修改位置：** `src/styles/main.scss` 第 193-212 行

### 4.3 快速查找表

| 类名/变量 | 用途 | 文件位置 | 行号 |
|---------|------|---------|------|
| `$grid-breakpoints` | 自定义断点 | `_bootstrap-custom.scss` | 10-18 |
| `$grid-columns-config` | 网格列数配置 | `main.scss` | 56-64 |
| `.full-width-section` | 全宽区域（推荐） | `main.scss` | 131-157 |
| `.full-width-grid` | 全宽网格容器 | `main.scss` | 193-212 |
| `.custom-grid` | 自定义网格容器 | `main.scss` | 67-72 |
| `.custom-col-*` | 自定义网格列 | `main.scss` | 82-103 |
| `.btn-custom` | 自定义按钮 | `main.scss` | 39-49 |

---

## 5. 断点样式组织指南

### 5.1 文件结构

```
src/styles/
├── _bootstrap-custom.scss    # Bootstrap 自定义配置
├── _variables.scss           # 全局变量（颜色、间距、字体等）
├── main.scss                 # 主样式文件（入口）
└── breakpoints/              # 断点样式目录
    ├── _index.scss           # 统一导入所有断点文件
    ├── _xs.scss              # 0px+ (基础样式)
    ├── _sm.scss              # 393px+
    ├── _md.scss              # 768px+
    ├── _lg.scss              # 1024px+
    ├── _xl.scss              # 1440px+
    ├── _xxl.scss             # 1920px+
    └── _xxxl.scss            # 2560px+
```

### 5.2 使用方式

#### 1. 全局变量（`_variables.scss`）

定义项目中使用的全局变量：

```scss
// 颜色变量
$primary-color: #0d6efd;
$secondary-color: #6c757d;

// 间距变量
$spacing-sm: 1rem;
$spacing-md: 1.5rem;

// 字体大小变量
$font-size-base: 1rem;
$font-size-lg: 1.125rem;
```

**修改位置：** `src/styles/_variables.scss`

#### 2. 基础样式（`main.scss`）

在 `main.scss` 中编写所有断点通用的样式：

```scss
body {
  font-family: $font-family-base;
  color: $text-color;
}

.btn-custom {
  padding: 0.5rem 1.5rem;
  // ... 所有断点通用的样式
}
```

#### 3. 断点样式（`breakpoints/` 目录）

**XS 断点（`_xs.scss`）- 0px+**

基础样式，无媒体查询，适用于所有屏幕：

```scss
.my-component {
  font-size: $font-size-sm;
  padding: $spacing-sm;
}
```

**SM 断点（`_sm.scss`）- 393px+**

```scss
@include media-breakpoint-up(sm) {
  .my-component {
    font-size: $font-size-base;
    padding: $spacing-md;
  }
}
```

**MD 断点（`_md.scss`）- 768px+**

```scss
@include media-breakpoint-up(md) {
  .my-component {
    font-size: $font-size-lg;
    padding: $spacing-lg;
  }
}
```

**其他断点类似...**

### 5.3 快速查找

| 需要修改 | 文件位置 |
|---------|---------|
| 全局变量（颜色、间距等） | `_variables.scss` |
| 所有断点通用样式 | `main.scss` |
| 移动设备样式（0px+） | `breakpoints/_xs.scss` |
| 小屏幕样式（393px+） | `breakpoints/_sm.scss` |
| 平板样式（768px+） | `breakpoints/_md.scss` |
| 桌面样式（1024px+） | `breakpoints/_lg.scss` |
| 大桌面样式（1440px+） | `breakpoints/_xl.scss` |
| 超大桌面样式（1920px+） | `breakpoints/_xxl.scss` |
| 4K 显示器样式（2560px+） | `breakpoints/_xxxl.scss` |

### 5.4 最佳实践

1. **移动优先**：基础样式写在 `_xs.scss` 或 `main.scss`，从最小屏幕开始，逐步增强
2. **使用变量**：颜色、间距、字体大小都使用变量，便于统一管理和修改
3. **保持文件简洁**：每个断点文件只包含该断点的样式
4. **命名规范**：使用语义化的类名，保持命名一致性
5. **注释说明**：为每个断点文件添加用途说明，为复杂样式添加注释

---

## 6. 响应式 Class 使用指南

### 6.1 核心概念

**移动优先（Mobile First）**

1. **基础样式**：在 `_xs.scss` 中定义（0px+，所有设备）
2. **逐步增强**：在更大的断点文件中覆盖或增强样式
3. **自动继承**：小屏幕的样式会自动应用到更大的屏幕，除非被覆盖

### 6.2 使用方式

#### 方式 1：同一个 class 在不同断点下有不同的样式（推荐）

这是最常用的方式，同一个 class 在不同屏幕尺寸下自动应用不同的样式。

**步骤 1：在 `_xs.scss` 中定义基础样式**

```scss
// src/styles/breakpoints/_xs.scss
.my-card {
  padding: $spacing-sm;        // 移动端：小间距
  font-size: $font-size-sm;   // 移动端：小字体
  background-color: $bg-color;
}
```

**步骤 2：在 `_md.scss` 中覆盖样式**

```scss
// src/styles/breakpoints/_md.scss
@include media-breakpoint-up(md) {
  .my-card {
    padding: $spacing-lg;      // 平板及以上：大间距
    font-size: $font-size-base; // 平板及以上：正常字体
  }
}
```

**步骤 3：在 `_lg.scss` 中继续增强**

```scss
// src/styles/breakpoints/_lg.scss
@include media-breakpoint-up(lg) {
  .my-card {
    padding: $spacing-xl;      // 桌面：超大间距
    font-size: $font-size-lg;  // 桌面：大字体
  }
}
```

**HTML 使用：**

```html
<div class="my-card">
  内容
</div>
```

**效果：**
- 移动端 (0-767px)：小间距、小字体
- 平板 (768px+)：大间距、正常字体
- 桌面 (1024px+)：超大间距、大字体

#### 方式 2：使用不同的 class 名称

如果你想要更明确的控制，可以使用不同的 class 名称。

```scss
// _xs.scss
.card-mobile {
  display: block;
  padding: $spacing-sm;
}

// _md.scss
@include media-breakpoint-up(md) {
  .card-desktop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: $spacing-lg;
  }
}
```

**HTML 使用：**

```html
<div class="card-mobile card-desktop">
  内容
</div>
```

#### 方式 3：使用 Bootstrap 的响应式工具类

Bootstrap 提供了很多响应式工具类，可以直接在 HTML 中使用。

```html
<!-- 移动端隐藏，md 及以上显示 -->
<div class="d-none d-md-block">
  桌面端内容
</div>

<!-- 移动端显示，md 及以上隐藏 -->
<div class="d-block d-md-none">
  移动端内容
</div>

<!-- 移动端居中，md 及以上左对齐 -->
<div class="text-center text-md-left">
  响应式文本对齐
</div>
```

### 6.3 实际示例

#### 示例 1：响应式卡片

```scss
// _xs.scss
.product-card {
  padding: $spacing-sm;
  margin-bottom: $spacing-md;
  border-radius: 0.5rem;
}

// _md.scss
@include media-breakpoint-up(md) {
  .product-card {
    padding: $spacing-lg;
    margin-bottom: $spacing-lg;
  }
}

// _lg.scss
@include media-breakpoint-up(lg) {
  .product-card {
    padding: $spacing-xl;
    margin-bottom: $spacing-xl;
  }
}
```

#### 示例 2：响应式网格布局

```scss
// _xs.scss
.product-grid {
  display: grid;
  grid-template-columns: 1fr;  // 移动端：1 列
  gap: $spacing-sm;
}

// _md.scss
@include media-breakpoint-up(md) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);  // 平板：2 列
    gap: $spacing-md;
  }
}

// _lg.scss
@include media-breakpoint-up(lg) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);  // 桌面：3 列
    gap: $spacing-lg;
  }
}
```

### 6.4 断点文件对应关系

| 断点 | 文件 | 屏幕尺寸 | 媒体查询 |
|------|------|---------|---------|
| XS | `_xs.scss` | 0px+ | 不需要（基础样式） |
| SM | `_sm.scss` | 393px+ | `@include media-breakpoint-up(sm)` |
| MD | `_md.scss` | 768px+ | `@include media-breakpoint-up(md)` |
| LG | `_lg.scss` | 1024px+ | `@include media-breakpoint-up(lg)` |
| XL | `_xl.scss` | 1440px+ | `@include media-breakpoint-up(xl)` |
| XXL | `_xxl.scss` | 1920px+ | `@include media-breakpoint-up(xxl)` |
| XXXL | `_xxxl.scss` | 2560px+ | `@include media-breakpoint-up(xxxl)` |

### 6.5 编写步骤

1. **在 `_xs.scss` 中写基础样式**（所有设备都会应用）
2. **在更大的断点文件中覆盖或增强**（使用 `@include media-breakpoint-up()`）
3. **在 HTML 中使用同一个 class**（会自动响应式）

---

## 7. 自定义网格系统使用指南

### 7.1 断点配置

项目已配置以下断点：

- **xs**: 0px（基础，无媒体查询）
- **sm**: 393px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1440px
- **xxl**: 1920px
- **xxxl**: 2560px

### 7.2 网格列数配置

在 `src/styles/main.scss` 中，你可以修改 `$grid-columns-config` 来为每个断点设置不同的总列数：

```scss
$grid-columns-config: (
  xs: 4,   // 0px+ 使用 4 列
  sm: 6,   // 393px+ 使用 6 列
  md: 8,   // 768px+ 使用 8 列
  lg: 10,  // 1024px+ 使用 10 列
  xl: 12,  // 1440px+ 使用 12 列
  xxl: 12, // 1920px+ 使用 12 列
  xxxl: 12 // 2560px+ 使用 12 列
);
```

**修改位置：** `src/styles/main.scss` 第 56-64 行

### 7.3 使用方法

#### 基本用法

```html
<div class="custom-grid">
  <div class="custom-col custom-col-2 custom-col-sm-3 custom-col-md-4 custom-col-lg-5 custom-col-xl-6">
    内容 1
  </div>
  <div class="custom-col custom-col-2 custom-col-sm-3 custom-col-md-4 custom-col-lg-5 custom-col-xl-6">
    内容 2
  </div>
</div>
```

**说明：**
- `custom-grid`: 网格容器
- `custom-col`: 基础列类（必须包含）
- `custom-col-2`: xs 断点下占 2/4 = 50%
- `custom-col-sm-3`: sm 断点下占 3/6 = 50%
- `custom-col-md-4`: md 断点下占 4/8 = 50%
- `custom-col-lg-5`: lg 断点下占 5/10 = 50%
- `custom-col-xl-6`: xl 断点下占 6/12 = 50%

### 7.4 计算方式

每个断点的宽度计算公式：

```
宽度 = (列数 / 该断点的总列数) × 100%
```

**示例计算：**

假设使用 `custom-col-2 custom-col-sm-3 custom-col-md-4`：

- **xs (4列系统)**: 2/4 = 50%
- **sm (6列系统)**: 3/6 = 50%
- **md (8列系统)**: 4/8 = 50%

### 7.5 与 Bootstrap 网格的区别

| 特性 | Bootstrap 网格 | 自定义网格 |
|------|---------------|-----------|
| 列数 | 所有断点统一 12 列 | 每个断点可设置不同列数 |
| 类名 | `col-*`, `col-sm-*` | `custom-col-*`, `custom-col-sm-*` |
| 容器 | `container` + `row` | `custom-grid` |
| 灵活性 | 固定 12 列 | 可自定义每断点列数 |

### 7.6 注意事项

1. **必须包含基础类**: 每个列元素必须包含 `custom-col` 基础类
2. **响应式类**: 从 xs 到 xl，每个断点都需要指定对应的类
3. **列数总和**: 确保同一行的列数总和不超过该断点的总列数
4. **重新编译**: 修改 `$grid-columns-config` 后需要重新编译 SCSS

---

## 8. 响应式布局方式对比

### 8.1 两种方式对比

#### 使用容器（Container）的方式

**特点：**
- ✅ 内容有最大宽度限制，不会无限扩展
- ✅ 在大屏幕上内容居中，左右有边距
- ✅ 适合内容阅读区域（文章、博客等）
- ✅ Bootstrap 提供现成的 `container` 类

#### 不用容器，直接根据页面宽度

**特点：**
- ✅ 内容占满整个视口宽度
- ✅ 更灵活，可以精确控制每个断点的样式
- ✅ 适合全屏布局（Hero Section、Banner 等）
- ✅ 可以使用视口单位（vw、vh）实现更精确的控制

### 8.2 哪种方式更简单？

**不用容器通常更简单，原因：**

1. **更直观**：直接使用 `width: 100%` 或 `100vw`，不需要考虑最大宽度
2. **更灵活**：可以为每个断点设置不同的内边距，不受容器限制
3. **更少代码**：不需要额外的容器包装
4. **更适合现代设计**：全屏设计越来越流行

### 8.3 实现方式

#### 方式 1：使用百分比 + 媒体查询（推荐）

```scss
.full-width-section {
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;

  @include media-breakpoint-up(md) {
    padding-left: 8%;
    padding-right: 8%;
  }

  @include media-breakpoint-up(lg) {
    padding-left: 10%;
    padding-right: 10%;
  }
}
```

#### 方式 2：使用视口单位（vw）

```scss
.viewport-width-section {
  width: 100vw;
  padding-left: 4vw;
  padding-right: 4vw;

  @include media-breakpoint-up(md) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
}
```

#### 方式 3：使用 clamp() 函数（最现代）

```scss
.responsive-section {
  width: 100%;
  padding-left: clamp(1rem, 5vw, 5rem);
  padding-right: clamp(1rem, 5vw, 5rem);
}
```

### 8.4 实际使用建议

#### 场景 1：全屏 Hero Section
```html
<section class="full-width-section hero">
  <h1>标题</h1>
</section>
```
**推荐：** 不用容器，使用 `width: 100%` + 媒体查询

#### 场景 2：产品展示网格
```html
<section class="full-width-section">
  <div class="full-width-grid">
    <div class="product-card">产品 1</div>
    <div class="product-card">产品 2</div>
  </div>
</section>
```
**推荐：** 不用容器，使用 `width: 100%` + 响应式网格

### 8.5 总结

| 特性 | 使用容器 | 不用容器 |
|------|---------|---------|
| **复杂度** | 中等 | 简单 |
| **灵活性** | 中等 | 高 |
| **代码量** | 多（需要容器包装） | 少 |
| **大屏幕处理** | 自动限制宽度 | 需要手动处理 |
| **适用场景** | 内容阅读、博客 | 全屏布局、Hero、Banner |
| **推荐度** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**结论：** 对于大多数现代网站设计，**不用容器的方式更简单、更灵活**，特别是全屏布局和响应式设计。

---

## 9. 注意事项

### 9.1 编译顺序

Bootstrap 的导入顺序很重要，必须按照 `_bootstrap-custom.scss` 中的顺序导入：

1. 导入 Bootstrap functions
2. 定义自定义变量
3. 导入 Bootstrap variables
4. 导入 Bootstrap mixins
5. 导入 Bootstrap 其他部分

### 9.2 变量覆盖

自定义变量必须在导入 Bootstrap 的 `variables` 之前定义，否则不会生效。

### 9.3 文件命名

以 `_` 开头的 SCSS 文件是部分文件（partial），不会被单独编译，只能通过 `@import` 导入。

### 9.4 修改配置后

修改以下配置后需要重新编译 SCSS：
- `$grid-breakpoints`
- `$grid-columns-config`
- 任何自定义样式

```bash
npm run build-scss-prod
```

### 9.5 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

### 9.6 修改指南

#### 修改断点
编辑 `src/styles/_bootstrap-custom.scss` 第 10-18 行

#### 修改网格列数
编辑 `src/styles/main.scss` 第 56-64 行，然后重新编译

#### 修改全宽布局内边距
编辑 `src/styles/main.scss` 第 131-157 行

#### 添加新的自定义样式
- 所有断点通用 → 写在 `main.scss`
- 特定断点 → 写在对应的 `breakpoints/_*.scss`

---

## 📚 相关资源

- [Bootstrap 5 官方文档](https://getbootstrap.com/docs/5.3/)
- [Sass 官方文档](https://sass-lang.com/documentation)

---

**最后更新：** 2025-11-20
