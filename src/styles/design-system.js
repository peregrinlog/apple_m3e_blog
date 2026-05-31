/**
 * Astro Personal Blog - Design System Documentation
 * 
 * CSS 变量清单、主题切换机制说明、组件使用指南
 */

// ============================================
// CSS 变量系统架构
// ============================================

/**
 * 主题变量层级结构:
 * 
 * 1. Global Tokens (全局令牌)
 *    - 最基础的色板、字体、间距值
 *    - 不直接使用，仅用于构建语义变量
 * 
 * 2. Semantic Tokens (语义令牌)
 *    - 描述用途而非具体值 (如 --color-bg-primary)
 *    - 所有组件和布局只使用这一层变量
 * 
 * 3. Component Tokens (组件令牌)
 *    - 特定组件的定制化变量
 *    - 可选，用于覆盖默认语义变量
 */

// ============================================
// 色彩系统设计 (Material 3 Dynamic Color 逻辑)
// ============================================

/**
 * Light Theme (浅色主题)
 * 
 * Primary Palette: #6750A4 (Material Deep Purple)
 * Generated Tonal Palette:
 *   - Primary: #6750A4
 *   - On Primary: #FFFFFF
 *   - Primary Container: #EADDFF
 *   - On Primary Container: #21005D
 *   
 * Secondary Palette: #625B71
 * Tertiary Palette: #7D5260
 * 
 * Neutral Palette: 用于背景、表面、边框
 */

const lightThemeColors = {
  // Primary Colors
  '--color-primary': '#6750A4',
  '--color-on-primary': '#FFFFFF',
  '--color-primary-container': '#EADDFF',
  '--color-on-primary-container': '#21005D',
  
  // Secondary Colors
  '--color-secondary': '#625B71',
  '--color-on-secondary': '#FFFFFF',
  '--color-secondary-container': '#E8DEF8',
  '--color-on-secondary-container': '#1D192B',
  
  // Tertiary Colors
  '--color-tertiary': '#7D5260',
  '--color-on-tertiary': '#FFFFFF',
  '--color-tertiary-container': '#FFD8E4',
  '--color-on-tertiary-container': '#31111D',
  
  // Error Colors
  '--color-error': '#B3261E',
  '--color-on-error': '#FFFFFF',
  '--color-error-container': '#F9DEDC',
  '--color-on-error-container': '#410E0B',
  
  // Background & Surface
  '--color-background': '#FFFBFE',
  '--color-on-background': '#1C1B1F',
  '--color-surface': '#FFFBFE',
  '--color-on-surface': '#1C1B1F',
  '--color-surface-variant': '#E7E0EC',
  '--color-on-surface-variant': '#49454F',
  '--color-surface-container': '#F3EDF7',
  '--color-surface-container-high': '#ECE6F0',
  
  // Outline & Border
  '--color-outline': '#79747E',
  '--color-outline-variant': '#CAC4D0',
  
  // Shadow & Scrim
  '--color-shadow': 'rgba(0, 0, 0, 0.15)',
  '--color-scrim': 'rgba(0, 0, 0, 0.32)',
};

/**
 * Dark Theme (深色主题)
 * 
 * 基于相同的 Primary Palette 生成深色变体
 */

const darkThemeColors = {
  // Primary Colors
  '--color-primary': '#D0BCFF',
  '--color-on-primary': '#381E72',
  '--color-primary-container': '#4F378B',
  '--color-on-primary-container': '#EADDFF',
  
  // Secondary Colors
  '--color-secondary': '#CCC2DC',
  '--color-on-secondary': '#332D41',
  '--color-secondary-container': '#4A4458',
  '--color-on-secondary-container': '#E8DEF8',
  
  // Tertiary Colors
  '--color-tertiary': '#EFB8C8',
  '--color-on-tertiary': '#492532',
  '--color-tertiary-container': '#633B48',
  '--color-on-tertiary-container': '#FFD8E4',
  
  // Error Colors
  '--color-error': '#F2B8B5',
  '--color-on-error': '#601410',
  '--color-error-container': '#8C1D18',
  '--color-on-error-container': '#F9DEDC',
  
  // Background & Surface
  '--color-background': '#1C1B1F',
  '--color-on-background': '#E6E1E5',
  '--color-surface': '#1C1B1F',
  '--color-on-surface': '#E6E1E5',
  '--color-surface-variant': '#49454F',
  '--color-on-surface-variant': '#CAC4D0',
  '--color-surface-container': '#212121',
  '--color-surface-container-high': '#2A2A2A',
  
  // Outline & Border
  '--color-outline': '#938F99',
  '--color-outline-variant': '#49454F',
  
  // Shadow & Scrim
  '--color-shadow': 'rgba(0, 0, 0, 0.32)',
  '--color-scrim': 'rgba(0, 0, 0, 0.6)',
};

// ============================================
// 圆角系统 (Material 3 Expressive)
// ============================================

const borderRadiusSystem = {
  '--radius-xs': '4px',    // Extra Small - 小图标、徽章
  '--radius-sm': '8px',    // Small - 按钮、输入框
  '--radius-md': '12px',   // Medium - 卡片、对话框
  '--radius-lg': '16px',   // Large - 大卡片、模态框
  '--radius-xl': '28px',   // Extra Large - 特殊容器
  '--radius-full': '9999px', // 完全圆形
};

// ============================================
// 字体系统 (Apple 风格优先)
// ============================================

const fontSystem = {
  // 系统字体栈 (Apple 优先)
  '--font-family-sans': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  '--font-family-mono': 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  
  // 字号 (基于 16px 基准)
  '--font-size-xs': '0.75rem',    // 12px
  '--font-size-sm': '0.875rem',   // 14px
  '--font-size-base': '1rem',     // 16px
  '--font-size-lg': '1.125rem',   // 18px
  '--font-size-xl': '1.25rem',    // 20px
  '--font-size-2xl': '1.5rem',    // 24px
  '--font-size-3xl': '1.875rem',  // 30px
  '--font-size-4xl': '2.25rem',   // 36px
  '--font-size-5xl': '3rem',      // 48px
  
  // 字重
  '--font-weight-normal': '400',
  '--font-weight-medium': '500',
  '--font-weight-semibold': '600',
  '--font-weight-bold': '700',
  
  // 行高
  '--line-height-tight': '1.25',
  '--line-height-normal': '1.5',
  '--line-height-relaxed': '1.625',
  '--line-height-loose': '1.75',
};

// ============================================
// 间距系统 (8px 基准网格)
// ============================================

const spacingSystem = {
  '--space-0': '0',
  '--space-1': '0.25rem',   // 4px
  '--space-2': '0.5rem',    // 8px
  '--space-3': '0.75rem',   // 12px
  '--space-4': '1rem',      // 16px
  '--space-5': '1.25rem',   // 20px
  '--space-6': '1.5rem',    // 24px
  '--space-8': '2rem',      // 32px
  '--space-10': '2.5rem',   // 40px
  '--space-12': '3rem',     // 48px
  '--space-16': '4rem',     // 64px
  '--space-20': '5rem',     // 80px
  '--space-24': '6rem',     // 96px
};

// ============================================
// 阴影系统 (Material 3 Elevation)
// ============================================

const shadowSystem = {
  '--shadow-xs': '0 1px 2px rgba(0, 0, 0, 0.1)',
  '--shadow-sm': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  '--shadow-md': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  '--shadow-lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  '--shadow-xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  '--shadow-2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
};

// ============================================
// 动画与过渡
// ============================================

const animationSystem = {
  '--transition-fast': '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  '--transition-normal': '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '--transition-slow': '350ms cubic-bezier(0.4, 0, 0.2, 1)',
  '--transition-bounce': '500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

// ============================================
// 主题切换机制
// ============================================

/**
 * 实现逻辑:
 * 
 * 1. 初始加载:
 *    - 检测 localStorage 中的 theme 偏好
 *    - 若无，则检测 prefers-color-scheme 媒体查询
 *    - 在 <html> 上设置 data-theme 属性
 * 
 * 2. 用户切换:
 *    - 点击切换按钮时，翻转 theme 值
 *    - 存储到 localStorage
 *    - 更新 data-theme 属性
 *    - 触发动画过渡
 * 
 * 3. 无闪屏保证:
 *    - 内联脚本在 <head> 中立即执行
 *    - 在 CSS 加载前设置好 data-theme
 */

const themeSwitchScript = `
<script>
  (function() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>
`;

// ============================================
// 组件使用指南
// ============================================

/**
 * 按钮组件:
 * 
 * .btn {
 *   background-color: var(--color-primary);
 *   color: var(--color-on-primary);
 *   border-radius: var(--radius-sm);
 *   padding: var(--space-2) var(--space-4);
 *   font-size: var(--font-size-sm);
 *   font-weight: var(--font-weight-medium);
 *   transition: all var(--transition-fast);
 * }
 * 
 * .btn:hover {
 *   box-shadow: var(--shadow-md);
 *   transform: translateY(-1px);
 * }
 */

/**
 * 卡片组件:
 * 
 * .card {
 *   background-color: var(--color-surface);
 *   border-radius: var(--radius-md);
 *   padding: var(--space-6);
 *   box-shadow: var(--shadow-sm);
 *   transition: all var(--transition-normal);
 * }
 * 
 * .card:hover {
 *   box-shadow: var(--shadow-lg);
 * }
 */

/**
 * 文章列表项:
 * 
 * .post-item {
 *   display: flex;
 *   flex-direction: column;
 *   gap: var(--space-3);
 *   padding: var(--space-4);
 *   border-bottom: 1px solid var(--color-outline-variant);
 * }
 */

export {
  lightThemeColors,
  darkThemeColors,
  borderRadiusSystem,
  fontSystem,
  spacingSystem,
  shadowSystem,
  animationSystem,
  themeSwitchScript,
};
