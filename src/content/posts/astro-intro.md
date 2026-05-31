---
title: "Astro 框架入门指南"
description: "了解 Astro 框架的核心概念和优势，快速开始构建高性能网站"
pubDate: 2024-01-20
tags: ["Astro", "前端", "教程"]
draft: false
---

# Astro 框架入门指南

[Astro](https://astro.build) 是一个现代化的静态站点生成器（SSG），专为内容驱动的网站设计。它以其独特的**岛屿架构**和出色的性能表现，迅速成为了开发者们的热门选择。

## 什么是 Astro？

Astro 是一个全新的 Web 框架，它的核心理念是：

> **发送更少的 JavaScript，获得更快的页面加载速度**

### 核心特性

1. **零 JavaScript 运行时**：默认情况下，Astro 不会向浏览器发送任何 JavaScript
2. **岛屿架构**：只在需要的地方加载交互式组件
3. **多框架支持**：可以使用 React、Vue、Svelte 等任何你喜欢的 UI 框架
4. **优秀的 SEO**：预渲染的 HTML 内容对搜索引擎友好
5. **内置优化**：自动处理图片优化、代码分割等性能优化

## 为什么选择 Astro？

### 性能优势

与传统 SPA 框架相比，Astro 有着显著的性能优势：

| 指标 | Astro | Next.js | Gatsby |
|------|-------|---------|--------|
| 首屏加载 | ~50KB | ~150KB | ~200KB |
| JavaScript | 0KB (默认) | ~50KB+ | ~100KB+ |
| Lighthouse | 95+ | 85-90 | 85-90 |

### 开发体验

```astro
---
// 这是 Astro 组件的前端脚本
const title = "Hello World";
---

<html>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

Astro 的语法类似于 HTML + JSX，学习曲线非常平缓。

## 快速开始

### 安装 Astro

```bash
# 使用 npm
npm create astro@latest my-blog

# 使用 pnpm
pnpm create astro my-blog

# 使用 yarn
yarn create astro my-blog
```

### 项目结构

```
my-blog/
├── src/
│   ├── components/    # 可复用组件
│   ├── layouts/       # 布局组件
│   ├── pages/         # 页面路由
│   └── styles/        # 样式文件
├── public/            # 静态资源
├── astro.config.mjs   # 配置文件
└── package.json
```

### 创建第一个页面

在 `src/pages/index.astro` 中：

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="首页">
  <h1>欢迎来到我的网站</h1>
  <p>这是用 Astro 构建的第一个页面。</p>
</Layout>
```

## 岛屿架构详解

岛屿架构（Islands Architecture）是 Astro 的核心设计理念：

```
整个页面 = 静态 HTML + 多个独立的"岛屿"（交互组件）
```

- **静态部分**：由 Astro 在服务端渲染成纯 HTML
- **岛屿部分**：按需加载的交互式组件

这种架构确保了：
- 最小的 JavaScript 包体积
- 最快的首次内容绘制（FCP）
- 优秀的 Core Web Vitals 评分

## 总结

Astro 是一个非常适合内容型网站的框架，特别是：

- 博客和个人网站
- 文档站点
- 营销页面
- 电商网站的商品详情页

如果你正在寻找一个既能保证性能，又不失开发效率的框架，Astro 绝对值得一试！

---

**相关阅读**：
- [Astro 官方文档](https://docs.astro.build)
- [岛屿架构介绍](https://jasonformat.com/islands-architecture/)
