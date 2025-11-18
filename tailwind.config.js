/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./static/**/*.js",
    "./static/**/*.html"
  ],
  theme: {
    extend: {
      // 自定义断点 - 匹配你的需求
      screens: {
        'xs': '393px',   // 手机
        'sm': '768px',   // 平板
        'md': '1024px',  // 小桌面
        'lg': '1440px',  // 桌面
        'xl': '1920px',  // 大桌面
        '2xl': '2560px', // 超大桌面 (Tailwind默认用2xl)
      },
      // 可以在这里添加自定义颜色、间距等
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  // 与Bootstrap兼容模式（可选）
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的基础样式重置，避免与 Bootstrap 冲突
  },
  plugins: [],
}

