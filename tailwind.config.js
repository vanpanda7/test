/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
  ],
  theme: {
    extend: {
      // 自定义断点 - 匹配设计图的断点
      screens: {
        'xs': '393px',   // 小手机
        'sm': '768px',   // 平板
        'md': '1024px',  // 小桌面
        'lg': '1440px',  // 桌面
        'xl': '1920px',  // 大桌面
        '2xl': '2560px', // 超大桌面
      },
      // 自定义颜色
      colors: {
        'primary': '#1D1D1D',
        'secondary': '#F2F2F2',
        'white': '#FFFFFF',
      },
      // 自定义间距
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      // 自定义字体大小
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.2', fontWeight: '300' }],
        'display-md': ['3.5rem', { lineHeight: '1.2', fontWeight: '300' }],
        'display-lg': ['4.5rem', { lineHeight: '1.2', fontWeight: '300' }],
      },
      // 自定义圆角
      borderRadius: {
        'card': '16px',
      },
    },
  },
  plugins: [],
}
