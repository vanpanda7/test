# 响应式项目 - Tailwind CSS 重构版

使用 Tailwind CSS 重构的响应式项目，支持 6 个自定义断点。

## 📋 目录

- [快速开始](#快速开始)
- [断点配置](#断点配置)
- [项目结构](#项目结构)
- [使用 Tailwind CSS](#使用-tailwind-css)
- [开发工作流](#开发工作流)
- [常见问题](#常见问题)

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 构建 Tailwind CSS

**开发模式**（推荐，自动监听文件变化）：
```bash
npm run build-css
```

**生产模式**（压缩输出）：
```bash
npm run build-css-prod
```

构建完成后，会在 `static/css/` 目录下生成 `tailwind.css` 文件。

### 3. 查看效果

在浏览器中打开 `index.html` 即可查看重构后的页面。

## 📱 断点配置

项目配置了 6 个自定义断点（在 `tailwind.config.js` 中）：

- **xs**: 393px (手机)
- **sm**: 768px (平板)
- **md**: 1024px (小桌面)
- **lg**: 1440px (桌面)
- **xl**: 1920px (大桌面)
- **2xl**: 2560px (超大桌面)

## 📁 项目结构

```
.
├── index.html              # 主页面（已使用 Tailwind 重构）
├── package.json            # npm 配置
├── tailwind.config.js      # Tailwind 配置（自定义断点）
├── src/
│   └── input.css          # Tailwind 输入文件（自定义组件）
└── static/
    ├── css/
    │   ├── tailwind.css   # 构建输出的 Tailwind CSS（运行 npm run build-css 后生成）
    │   ├── global.css     # 全局样式
    │   └── ...
    └── ...
```

## 🎨 使用 Tailwind CSS

### 响应式工具类

#### 文本大小
```html
<h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
  响应式标题
</h1>
```

#### 显示/隐藏
```html
<div class="hidden sm:block md:hidden lg:block">
  内容
</div>
```

#### 间距
```html
<div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
  内容
</div>
```

#### 宽度
```html
<div class="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
  内容
</div>
```

#### Flex 布局
```html
<!-- 移动端垂直，平板及以上水平 -->
<div class="flex flex-col sm:flex-row">
  <div>项目1</div>
  <div>项目2</div>
</div>

<!-- 响应式对齐 -->
<div class="flex justify-start md:justify-center lg:justify-between">
  内容
</div>
```

#### 网格布局
```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>卡片1</div>
  <div>卡片2</div>
  <div>卡片3</div>
  <div>卡片4</div>
</div>
```

### 自定义组件

项目在 `src/input.css` 中定义了一些自定义组件：

- **`.header-glass`** - 毛玻璃效果的 header 容器
- **`.btn-primary`** - 主要按钮样式（带 hover 效果）
- **`.container-responsive`** - 响应式容器

使用示例：
```html
<button class="btn-primary text-sm sm:text-base md:text-lg lg:text-xl">
  按钮
</button>
```

### 常用 Tailwind 类速查

#### 显示
- `hidden` / `block` / `flex` / `inline` / `inline-block`
- `sm:block` / `md:hidden` 等

#### 间距
- `p-{size}` - padding (0, 1, 2, 3, 4, 5, 6, 8, 10, 12...)
- `m-{size}` - margin
- `px-{size}` - 水平padding
- `py-{size}` - 垂直padding

#### 文本
- `text-{size}` - 字体大小 (xs, sm, base, lg, xl, 2xl, 3xl, 4xl...)
- `font-{weight}` - 字重 (thin, normal, medium, bold...)
- `text-{color}` - 文字颜色

#### 布局
- `w-{size}` - 宽度 (full, 1/2, 1/3, 1/4, auto...)
- `h-{size}` - 高度
- `flex` / `flex-col` / `flex-row`
- `justify-{position}` - 主轴对齐
- `items-{position}` - 交叉轴对齐

#### 响应式前缀
- `xs:` - ≥393px
- `sm:` - ≥768px
- `md:` - ≥1024px
- `lg:` - ≥1440px
- `xl:` - ≥1920px
- `2xl:` - ≥2560px

## 💻 开发工作流

1. **启动开发模式**：
   ```bash
   npm run build-css
   ```
   这会启动监听模式，当你修改 HTML 或 Tailwind 配置时，CSS 会自动重新构建。

2. **编辑代码**：
   - 在 `index.html` 中使用 Tailwind 工具类
   - 在 `src/input.css` 中添加自定义组件
   - 在 `tailwind.config.js` 中修改配置

3. **查看效果**：
   - 刷新浏览器查看更改

4. **生产构建**：
   ```bash
   npm run build-css-prod
   ```

## ❓ 常见问题

**Q: 构建后样式没有生效？**  
A: 确保 `static/css/tailwind.css` 文件已生成，并且 `index.html` 中已正确引用。

**Q: 如何添加新的自定义样式？**  
A: 在 `src/input.css` 的 `@layer components` 或 `@layer utilities` 中添加。

**Q: 可以继续使用 Bootstrap 吗？**  
A: 可以，项目配置了 `preflight: false`，Tailwind 不会覆盖 Bootstrap 的基础样式。你可以：
- 使用 Tailwind 的工具类进行样式设计
- 使用 Bootstrap 的网格系统（如果需要）
- 混合使用两者

**Q: 首次使用需要注意什么？**  
A: 
- 运行 `npm run build-css` 生成 `static/css/tailwind.css` 文件
- `static/css/tailwind.css` 已在 `.gitignore` 中，需要构建后才会生成
- 所有断点都在 `tailwind.config.js` 中定义，可以根据需要修改

## 🔧 技术栈

- **Tailwind CSS 3.4+** - 实用优先的 CSS 框架
- **Bootstrap Grid** - 网格系统（可选）
- **Vue.js** - JavaScript 框架
- **Swiper** - 轮播组件

## 🌐 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 📝 重构说明

### 已重构的部分

1. **Header（导航栏）**
   - 使用 Tailwind 工具类替换了原有的 CSS
   - 响应式间距和字体大小
   - 毛玻璃效果通过自定义组件 `.header-glass` 实现

2. **Banner（横幅）**
   - 使用 Tailwind 的响应式工具类
   - 标题字体大小：`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`
   - 按钮响应式字体：`text-sm sm:text-base md:text-lg lg:text-xl`

## 📄 许可证

MIT
