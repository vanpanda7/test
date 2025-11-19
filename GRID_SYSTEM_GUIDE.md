# SCSS 网格系统使用指南

## 📋 概述

这个网格系统类似于 Bootstrap 的栅格系统，支持 12 列布局，可以在所有断点下使用。

## 🎯 基本结构

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-4">
      <!-- 内容 -->
    </div>
  </div>
</div>
```

## 📐 可用的列类

### 基础列（无断点前缀）
- `.col-1` 到 `.col-12` - 占用 1-12 列
- `.col` - 自动填充剩余空间
- `.col-auto` - 根据内容自动调整宽度

### 各断点的列类

#### xs 断点 (393px+)
- `.col-xs-1` 到 `.col-xs-12`
- `.col-xs`
- `.col-xs-auto`

#### sm 断点 (768px+)
- `.col-sm-1` 到 `.col-sm-12`
- `.col-sm`
- `.col-sm-auto`

#### md 断点 (1024px+)
- `.col-md-1` 到 `.col-md-12`
- `.col-md`
- `.col-md-auto`

#### lg 断点 (1440px+)
- `.col-lg-1` 到 `.col-lg-12`
- `.col-lg`
- `.col-lg-auto`

#### xl 断点 (1920px+)
- `.col-xl-1` 到 `.col-xl-12`
- `.col-xl`
- `.col-xl-auto`

#### 2xl 断点 (2560px+)
- `.col-2xl-1` 到 `.col-2xl-12`
- `.col-2xl`
- `.col-2xl-auto`

## 💡 使用示例

### 示例 1: 响应式 3 列布局

```html
<div class="container">
  <div class="row">
    <!-- 移动端：1列，平板：2列，桌面：3列 -->
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card">卡片 1</div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card">卡片 2</div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card">卡片 3</div>
    </div>
  </div>
</div>
```

**效果：**
- 移动端 (< 768px): 每个卡片占满整行（12列）
- 平板 (≥ 768px): 每行2个卡片（每个6列）
- 桌面 (≥ 1024px): 每行3个卡片（每个4列）

### 示例 2: 不同断点的不同布局

```html
<div class="container">
  <div class="row">
    <!-- 移动端：全宽，xs：6列，sm：4列，md：3列 -->
    <div class="col-12 col-xs-6 col-sm-4 col-md-3">
      内容 1
    </div>
    <div class="col-12 col-xs-6 col-sm-4 col-md-3">
      内容 2
    </div>
    <div class="col-12 col-xs-6 col-sm-4 col-md-3">
      内容 3
    </div>
    <div class="col-12 col-xs-6 col-sm-4 col-md-3">
      内容 4
    </div>
  </div>
</div>
```

### 示例 3: 混合使用

```html
<div class="container">
  <div class="row">
    <!-- 侧边栏：移动端全宽，桌面占3列 -->
    <div class="col-12 col-md-3">
      <aside>侧边栏</aside>
    </div>
    <!-- 主内容：移动端全宽，桌面占9列 -->
    <div class="col-12 col-md-9">
      <main>主内容区域</main>
    </div>
  </div>
</div>
```

### 示例 4: 使用 col-auto

```html
<div class="container">
  <div class="row">
    <!-- 固定宽度 -->
    <div class="col-auto">
      <button>按钮</button>
    </div>
    <!-- 自动填充剩余空间 -->
    <div class="col">
      <input type="text" placeholder="输入框占满剩余空间" />
    </div>
  </div>
</div>
```

### 示例 5: 复杂布局

```html
<div class="container">
  <div class="row">
    <!-- 移动端：全宽，平板：6列，桌面：4列 -->
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card">卡片 1</div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card">卡片 2</div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card">卡片 3</div>
    </div>
    <!-- 移动端：全宽，平板：全宽，桌面：6列 -->
    <div class="col-12 col-md-6">
      <div class="card">大卡片 1</div>
    </div>
    <div class="col-12 col-md-6">
      <div class="card">大卡片 2</div>
    </div>
  </div>
</div>
```

## 🎨 实际应用示例

### 产品网格布局

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="product-card">
        <img src="product1.jpg" alt="产品1" />
        <h3>产品名称</h3>
        <p>产品描述</p>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="product-card">
        <img src="product2.jpg" alt="产品2" />
        <h3>产品名称</h3>
        <p>产品描述</p>
      </div>
    </div>
    <!-- 更多产品... -->
  </div>
</div>
```

**布局效果：**
- 移动端: 1列（全宽）
- 平板 (sm): 2列
- 小桌面 (md): 3列
- 大桌面 (lg): 4列

### 表单布局

```html
<div class="container">
  <form>
    <div class="row">
      <div class="col-12 col-md-6">
        <label>姓名</label>
        <input type="text" />
      </div>
      <div class="col-12 col-md-6">
        <label>邮箱</label>
        <input type="email" />
      </div>
      <div class="col-12">
        <label>地址</label>
        <input type="text" />
      </div>
      <div class="col-12 col-md-4">
        <button type="submit">提交</button>
      </div>
    </div>
  </form>
</div>
```

## 📊 列数说明

网格系统使用 **12 列布局**：

- `col-1` = 8.333% (1/12)
- `col-2` = 16.667% (2/12)
- `col-3` = 25% (3/12)
- `col-4` = 33.333% (4/12)
- `col-5` = 41.667% (5/12)
- `col-6` = 50% (6/12) - **常用：一半宽度**
- `col-7` = 58.333% (7/12)
- `col-8` = 66.667% (8/12)
- `col-9` = 75% (9/12)
- `col-10` = 83.333% (10/12)
- `col-11` = 91.667% (11/12)
- `col-12` = 100% (12/12) - **全宽**

## 🔧 自定义网格间距

如果需要修改网格间距，可以在 SCSS 中修改变量：

```scss
// 在 src/styles/main.scss 中
$grid-gutter: 1.5rem;  // 默认是 1rem，可以改为 1.5rem、2rem 等
```

## ⚠️ 注意事项

1. **必须使用 `.row` 包裹列**
   ```html
   <!-- ✅ 正确 -->
   <div class="row">
     <div class="col-6">内容</div>
   </div>

   <!-- ❌ 错误 -->
   <div class="col-6">内容</div>
   ```

2. **列的总和应该等于 12**
   ```html
   <!-- ✅ 正确：6 + 6 = 12 -->
   <div class="row">
     <div class="col-6">左</div>
     <div class="col-6">右</div>
   </div>

   <!-- ⚠️ 注意：如果超过12列，会自动换行 -->
   <div class="row">
     <div class="col-6">左</div>
     <div class="col-6">中</div>
     <div class="col-6">右（会换到下一行）</div>
   </div>
   ```

3. **移动端优先**
   - 先写基础类（如 `col-12`）
   - 再写断点类（如 `col-md-6`）
   - 这样在移动端有基础样式，在桌面端会覆盖

## 🎯 常用布局模式

### 2列布局
```html
<div class="row">
  <div class="col-12 col-md-6">左列</div>
  <div class="col-12 col-md-6">右列</div>
</div>
```

### 3列布局
```html
<div class="row">
  <div class="col-12 col-md-4">列1</div>
  <div class="col-12 col-md-4">列2</div>
  <div class="col-12 col-md-4">列3</div>
</div>
```

### 4列布局
```html
<div class="row">
  <div class="col-12 col-sm-6 col-md-3">列1</div>
  <div class="col-12 col-sm-6 col-md-3">列2</div>
  <div class="col-12 col-sm-6 col-md-3">列3</div>
  <div class="col-12 col-sm-6 col-md-3">列4</div>
</div>
```

### 侧边栏 + 主内容
```html
<div class="row">
  <div class="col-12 col-md-3">侧边栏</div>
  <div class="col-12 col-md-9">主内容</div>
</div>
```

## 📚 总结

- ✅ 使用 `.row` 包裹所有列
- ✅ 使用 `.col-{断点}-{列数}` 定义列宽
- ✅ 移动端优先：先写基础类，再写断点类
- ✅ 列数总和建议等于 12（超过会自动换行）
- ✅ 支持所有断点：xs, sm, md, lg, xl, 2xl

现在你可以在 HTML 中使用类似 Bootstrap 的网格系统了！🎉

