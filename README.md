# Astro Personal Blog

一个基于 Astro 框架的个人博客系统，融合 **Apple 设计风格** 与 **Material 3 Expressive** 设计语言。

## ✨ 特性

### 核心功能 (P0)
- ✅ 首页展示文章列表（标题、摘要、日期、标签）
- ✅ 文章详情页渲染 Markdown 内容，支持代码高亮
- ✅ 关于页展示博主信息、技能、联系方式
- ✅ 标签页支持按标签聚合文章
- ✅ 深色/浅色主题切换，记住用户偏好
- ✅ 语义化 CSS 变量系统
- ✅ 响应式布局，适配桌面端和移动端

### 重要功能 (P1)
- ✅ 标签云导航组件
- ✅ SEO 优化（meta 标签、Open Graph）
- ✅ 页面切换动画和微交互

## 🎨 设计理念

### Apple 风格基调 (70%)
- **极简布局**: 大量留白（8px 基准网格）
- **清晰层次**: 通过字号、字重、色彩建立信息层级
- **内容优先**: 去除多余装饰，让内容成为视觉焦点
- **精致排版**: 使用系统字体栈，优化行高和段落间距

### Material 3 Expressive 点缀 (30%)
- **动态色彩**: 主题色使用 Material 3 的 Tonal Palette
- **圆角系统**: Extra Small (4px) → Extra Large (28px)
- **悬浮与层级**: 微妙的 box-shadow 建立空间感
- **交互反馈**: 悬停、按压状态有色彩叠加

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm / pnpm / yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:4321` 预览博客。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
astro_personal_blog/
├── src/
│   ├── components/        # 可复用组件
│   ├── content/
│   │   └── posts/         # 博客文章 (Markdown)
│   ├── layouts/           # 布局组件
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/             # 页面路由
│   │   ├── index.astro    # 首页
│   │   ├── about.astro    # 关于页
│   │   ├── tags/          # 标签相关页面
│   │   └── posts/         # 文章详情页面
│   └── styles/            # 样式文件
│       ├── themes/
│       │   └── base.css   # 主题变量定义
│       ├── global.css     # 全局样式
│       └── design-system.js # 设计系统文档
├── public/                # 静态资源
│   └── favicon.svg
├── astro.config.mjs       # Astro 配置
└── package.json
```

## 🎯 CSS 变量系统

所有视觉属性均通过 CSS 变量控制，无硬编码颜色值：

### 色彩变量
```css
--color-primary              /* 主色调 */
--color-on-primary           /* 主色调上的文字 */
--color-surface              /* 表面背景色 */
--color-background           /* 页面背景色 */
/* ... 更多变量见 src/styles/themes/base.css */
```

### 圆角变量 (Material 3)
```css
--radius-xs: 4px;    /* Extra Small */
--radius-sm: 8px;    /* Small */
--radius-md: 12px;   /* Medium */
--radius-lg: 16px;   /* Large */
--radius-xl: 28px;   /* Extra Large */
```

### 间距变量 (8px 网格)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-4: 1rem;      /* 16px */
/* ... */
```

## 📝 添加新文章

在 `src/content/posts/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "文章标题"
description: "文章摘要"
pubDate: 2024-01-20
tags: ["标签 1", "标签 2"]
draft: false
---

# 文章内容

这里是正文...
```

## 🌙 主题切换

主题切换通过 `data-theme` 属性实现：

- **浅色主题**: `data-theme="light"` (默认)
- **深色主题**: `data-theme="dark"`

用户偏好会自动保存到 `localStorage`，并在下次访问时恢复。

## 🔧 自定义主题

1. 在 `src/styles/themes/` 目录创建新的主题文件
2. 定义所有 CSS 变量
3. 在 `[data-theme="your-theme-name"]` 选择器下覆盖变量值

## 📊 性能指标

目标 Lighthouse 评分：
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 📄 许可证

MIT License

---

**Built with ❤️ using Astro**