# SCSS + Bootstrap 项目

这是一个集成了 SCSS 和 Bootstrap 5 的项目模板。

> 📖 **📚 完整文档请查看 [DOCUMENTATION.md](./DOCUMENTATION.md)**

## 功能特性

- ✅ **Bootstrap 5.3.3** - 最新版本的 Bootstrap 框架
- ✅ **SCSS 支持** - 使用 SCSS 编写样式，支持变量、嵌套、混入等
- ✅ **自定义配置** - 可以自定义 Bootstrap 的断点、颜色等变量
- ✅ **自动编译** - 支持 watch 模式，自动编译 SCSS 文件

## 项目结构

```
项目根目录/
├── src/
│   └── styles/
│       ├── _bootstrap-custom.scss  # Bootstrap 自定义配置
│       └── main.scss               # 主样式文件
├── static/
│   ├── css/
│   │   └── main.css                # 编译后的 CSS 文件（自动生成）
│   └── js/
├── index.html                       # 主 HTML 文件
├── package.json                     # 项目配置和依赖
└── README.md                        # 项目说明文档
```

## 安装依赖

```bash
npm install
```

## 开发模式

启动 watch 模式，自动编译 SCSS 文件：

```bash
npm run build-scss
```

## 生产构建

编译并压缩 CSS 文件：

```bash
npm run build-scss-prod
```

## 自定义 Bootstrap

在 `src/styles/_bootstrap-custom.scss` 文件中可以自定义：

- **断点（Breakpoints）**：修改 `$grid-breakpoints`
- **容器最大宽度**：修改 `$container-max-widths`
- **颜色**：修改 `$primary`、`$secondary` 等颜色变量
- **字体**：修改 `$font-family-base`

### 自定义断点示例

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 768px,
  md: 1024px,
  lg: 1440px,
  xl: 1920px,
  xxl: 2560px
);
```

### 使用自定义断点

在 SCSS 文件中使用 Bootstrap 的 mixin：

```scss
@include media-breakpoint-up(sm) {
  // 在 sm 断点及以上应用的样式
}

@include media-breakpoint-down(md) {
  // 在 md 断点及以下应用的样式
}
```

## 编写自定义样式

在 `src/styles/main.scss` 文件中编写你的自定义样式：

```scss
// 自定义变量
$primary-color: #0d6efd;

// 自定义样式
.my-custom-class {
  color: $primary-color;
  
  &:hover {
    opacity: 0.8;
  }
}
```

## 使用 Bootstrap 组件

在 HTML 中直接使用 Bootstrap 的组件和工具类：

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-primary">按钮</button>
    </div>
  </div>
</div>
```

## 注意事项

1. **编译顺序**：Bootstrap 的导入顺序很重要，必须按照 `_bootstrap-custom.scss` 中的顺序导入
2. **变量覆盖**：自定义变量必须在导入 Bootstrap 的 `variables` 之前定义
3. **文件命名**：以 `_` 开头的 SCSS 文件是部分文件（partial），不会被单独编译

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT

