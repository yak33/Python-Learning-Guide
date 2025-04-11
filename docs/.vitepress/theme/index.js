/*
 * @Author: ZHANGCHAO
 * @Date: 2025-04-10 18:02:20
 * @LastEditors: ZHANGCHAO
 * @LastEditTime: 2025-04-11 00:07:02
 * @FilePath: /PythonStudyDocs/docs/.vitepress/theme/index.js
 */
// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css"; // 引入自定义样式

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 添加全局钩子，拦截所有图片
    // 这里可能需要更复杂的逻辑
  },
};
