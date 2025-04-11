import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python学习指南",
  description: "一个用来学习Python的文档指南",

  // 网站图标和其他头部信息
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐍</text></svg>",
      },
    ],
    ["meta", { name: "theme-color", content: "#3776AB" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  // Markdown 配置
  markdown: {
    // 允许在 Markdown 中使用 HTML
    html: true,
    // 可以扩展 Markdown-it 实例
    config: (md) => {
      // 可以添加插件或修改配置
      // 例如，您可以使用 markdown-it-replace-link 插件替换所有图片链接
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 添加网站logo
    logo: "/logo.svg",

    // 社交媒体链接
    socialLinks: [
      { icon: "github", link: "https://github.com/jackfrued/Python-100-Days" },
    ],

    // 页脚信息
    footer: {
      message: "基于MIT License发布",
      copyright: "Copyright © 2022-present Python学习文档团队",
    },

    // 启用搜索功能
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },

    // 导航配置
    nav: [
      { text: "首页", link: "/" },
      { text: "入门指南", link: "/python-100-days/Day01-20/" },
      { text: "进阶教程", link: "/python-100-days/Day21-30/" },
    ],

    sidebar: {
      "/python-100-days/": [
        {
          text: "Python-100-Days",
          items: [
            { text: "课程介绍", link: "/python-100-days/" },
            {
              text: "Day01~20 - Python语言基础",
              collapsed: true,
              items: [
                {
                  text: "01.初识Python",
                  link: "/python-100-days/Day01-20/01.初识Python",
                },
                {
                  text: "02.第一个Python程序",
                  link: "/python-100-days/Day01-20/02.第一个Python程序",
                },
                {
                  text: "03.Python语言中的变量",
                  link: "/python-100-days/Day01-20/03.Python语言中的变量",
                },
                {
                  text: "04.Python语言中的运算符",
                  link: "/python-100-days/Day01-20/04.Python语言中的运算符",
                },
                {
                  text: "05.分支结构",
                  link: "/python-100-days/Day01-20/05.分支结构",
                },
                {
                  text: "06.循环结构",
                  link: "/python-100-days/Day01-20/06.循环结构",
                },
                {
                  text: "07.分支和循环结构实战",
                  link: "/python-100-days/Day01-20/07.分支和循环结构实战",
                },
                {
                  text: "08.常用数据结构之列表-1",
                  link: "/python-100-days/Day01-20/08.常用数据结构之列表-1",
                },
                {
                  text: "09.常用数据结构之列表-2",
                  link: "/python-100-days/Day01-20/09.常用数据结构之列表-2",
                },
                {
                  text: "10.常用数据结构之元组",
                  link: "/python-100-days/Day01-20/10.常用数据结构之元组",
                },
                {
                  text: "11.常用数据结构之字符串",
                  link: "/python-100-days/Day01-20/11.常用数据结构之字符串",
                },
                {
                  text: "12.常用数据结构之集合",
                  link: "/python-100-days/Day01-20/12.常用数据结构之集合",
                },
                {
                  text: "13.常用数据结构之字典",
                  link: "/python-100-days/Day01-20/13.常用数据结构之字典",
                },
                {
                  text: "14.函数和模块",
                  link: "/python-100-days/Day01-20/14.函数和模块",
                },
                {
                  text: "15.函数应用实战",
                  link: "/python-100-days/Day01-20/15.函数应用实战",
                },
                {
                  text: "16.函数使用进阶",
                  link: "/python-100-days/Day01-20/16.函数使用进阶",
                },
                {
                  text: "17.函数高级应用",
                  link: "/python-100-days/Day01-20/17.函数高级应用",
                },
                {
                  text: "18.面向对象编程入门",
                  link: "/python-100-days/Day01-20/18.面向对象编程入门",
                },
                {
                  text: "19.面向对象编程进阶",
                  link: "/python-100-days/Day01-20/19.面向对象编程进阶",
                },
                {
                  text: "20.面向对象编程应用",
                  link: "/python-100-days/Day01-20/20.面向对象编程应用",
                },
              ],
            },
            // 其他章节保持不变...
            {
              text: "Day21~30 - Python语言进阶",
              collapsed: true,
              items: [
                {
                  text: "21.文件读写和异常处理",
                  link: "/python-100-days/Day21-30/21.文件读写和异常处理",
                },
                {
                  text: "22.对象的序列化和反序列化",
                  link: "/python-100-days/Day21-30/22.对象的序列化和反序列化",
                },
                {
                  text: "23.Python读写CSV文件",
                  link: "/python-100-days/Day21-30/23.Python读写CSV文件",
                },
                {
                  text: "24.Python读写Excel文件-1",
                  link: "/python-100-days/Day21-30/24.Python读写Excel文件-1",
                },
                {
                  text: "25.Python读写Excel文件-2",
                  link: "/python-100-days/Day21-30/25.Python读写Excel文件-2",
                },
                {
                  text: "26.Python操作Word和PowerPoint文件",
                  link: "/python-100-days/Day21-30/26.Python操作Word和PowerPoint文件",
                },
                {
                  text: "27.Python操作PDF文件",
                  link: "/python-100-days/Day21-30/27.Python操作PDF文件",
                },
                {
                  text: "28.Python处理图像",
                  link: "/python-100-days/Day21-30/28.Python处理图像",
                },
                {
                  text: "29.Python发送邮件和短信",
                  link: "/python-100-days/Day21-30/29.Python发送邮件和短信",
                },
                {
                  text: "30.正则表达式的应用",
                  link: "/python-100-days/Day21-30/30.正则表达式的应用",
                },
              ],
            },
            {
              text: "Day31~35 - 其他相关内容",
              collapsed: true,
              items: [
                {
                  text: "31.Python语言进阶",
                  link: "/python-100-days/Day31-35/31.Python语言进阶",
                },
                {
                  text: "32-33.Web前端入门",
                  link: "/python-100-days/Day31-35/32-33.Web前端入门",
                },
                {
                  text: "34-35.玩转Linux操作系统",
                  link: "/python-100-days/Day31-35/34-35.玩转Linux操作系统",
                },
              ],
            },
            {
              text: "Day36~45 - 数据库基础和进阶",
              collapsed: true,
              items: [
                {
                  text: "36.关系型数据库和MySQL概述",
                  link: "/python-100-days/Day36-45/36.关系型数据库和MySQL概述",
                },
                {
                  text: "37.SQL详解之DDL",
                  link: "/python-100-days/Day36-45/37.SQL详解之DDL",
                },
                {
                  text: "38.SQL详解之DML",
                  link: "/python-100-days/Day36-45/38.SQL详解之DML",
                },
                {
                  text: "39.SQL详解之DQL",
                  link: "/python-100-days/Day36-45/39.SQL详解之DQL",
                },
                {
                  text: "40.SQL详解之DCL",
                  link: "/python-100-days/Day36-45/40.SQL详解之DCL",
                },
                {
                  text: "41.MySQL新特性",
                  link: "/python-100-days/Day36-45/41.MySQL新特性",
                },
                {
                  text: "42.视图、函数和过程",
                  link: "/python-100-days/Day36-45/42.视图、函数和过程",
                },
                {
                  text: "43.索引",
                  link: "/python-100-days/Day36-45/43.索引",
                },
                {
                  text: "44.Python接入MySQL数据库",
                  link: "/python-100-days/Day36-45/44.Python接入MySQL数据库",
                },
                {
                  text: "45.大数据平台和HiveSQL",
                  link: "/python-100-days/Day36-45/45.大数据平台和HiveSQL",
                },
              ],
            },
            {
              text: "Day46~60 - 实战Django",
              collapsed: true,
              items: [
                {
                  text: "46.Django快速上手",
                  link: "/python-100-days/Day46-60/46.Django快速上手",
                },
                {
                  text: "47.深入模型",
                  link: "/python-100-days/Day46-60/47.深入模型",
                },
                {
                  text: "48.静态资源和Ajax请求",
                  link: "/python-100-days/Day46-60/48.静态资源和Ajax请求",
                },
                {
                  text: "49.Cookie和Session",
                  link: "/python-100-days/Day46-60/49.Cookie和Session",
                },
                {
                  text: "50.制作报表",
                  link: "/python-100-days/Day46-60/50.制作报表",
                },
                {
                  text: "51.日志和调试工具栏",
                  link: "/python-100-days/Day46-60/51.日志和调试工具栏",
                },
                {
                  text: "52.中间件的应用",
                  link: "/python-100-days/Day46-60/52.中间件的应用",
                },
                {
                  text: "53.前后端分离开发入门",
                  link: "/python-100-days/Day46-60/53.前后端分离开发入门",
                },
                {
                  text: "54.RESTful架构和DRF入门",
                  link: "/python-100-days/Day46-60/54.RESTful架构和DRF入门",
                },
                {
                  text: "55.RESTful架构和DRF进阶",
                  link: "/python-100-days/Day46-60/55.RESTful架构和DRF进阶",
                },
                {
                  text: "56.使用缓存",
                  link: "/python-100-days/Day46-60/56.使用缓存",
                },
                {
                  text: "57.接入三方平台",
                  link: "/python-100-days/Day46-60/57.接入三方平台",
                },
                {
                  text: "58.异步任务和定时任务",
                  link: "/python-100-days/Day46-60/58.异步任务和定时任务",
                },
                {
                  text: "59.单元测试",
                  link: "/python-100-days/Day46-60/59.单元测试",
                },
                {
                  text: "60.项目上线",
                  link: "/python-100-days/Day46-60/60.项目上线",
                },
              ],
            },
            {
              text: "Day61~65 - 网络数据采集",
              collapsed: true,
              items: [
                {
                  text: "61.网络数据采集概述",
                  link: "/python-100-days/Day61-65/61.网络数据采集概述",
                },
                {
                  text: "62.用Python获取网络资源",
                  link: "/python-100-days/Day61-65/62.用Python获取网络资源-1",
                },
                {
                  text: "62.用Python解析HTML页面",
                  link: "/python-100-days/Day61-65/62.用Python解析HTML页面-2",
                },
                {
                  text: "63.Python中的并发编程-1",
                  link: "/python-100-days/Day61-65/63.Python中的并发编程-1",
                },
                {
                  text: "63.Python中的并发编程-2",
                  link: "/python-100-days/Day61-65/63.Python中的并发编程-2",
                },
                {
                  text: "63.Python中的并发编程-3",
                  link: "/python-100-days/Day61-65/63.Python中的并发编程-3",
                },
                {
                  text: "63.并发编程在爬虫中的应用",
                  link: "/python-100-days/Day61-65/63.并发编程在爬虫中的应用",
                },
                {
                  text: "64.使用Selenium抓取网页动态内容",
                  link: "/python-100-days/Day61-65/64.使用Selenium抓取网页动态内容",
                },
                {
                  text: "65.爬虫框架Scrapy简介",
                  link: "/python-100-days/Day61-65/65.爬虫框架Scrapy简介",
                },
              ],
            },
            {
              text: "Day66~80 - Python数据分析",
              collapsed: true,
              items: [
                {
                  text: "66.数据分析概述",
                  link: "/python-100-days/Day66-80/66.数据分析概述",
                },
                {
                  text: "67.环境准备",
                  link: "/python-100-days/Day66-80/67.环境准备",
                },
                {
                  text: "68.NumPy的应用-1",
                  link: "/python-100-days/Day66-80/68.NumPy的应用-1",
                },
                {
                  text: "69.NumPy的应用-2",
                  link: "/python-100-days/Day66-80/69.NumPy的应用-2",
                },
                {
                  text: "70.NumPy的应用-3",
                  link: "/python-100-days/Day66-80/70.NumPy的应用-3",
                },
                {
                  text: "71.NumPy的应用-4",
                  link: "/python-100-days/Day66-80/71.NumPy的应用-4",
                },
                {
                  text: "72.深入浅出pandas-1",
                  link: "/python-100-days/Day66-80/72.深入浅出pandas-1",
                },
                {
                  text: "73.深入浅出pandas-2",
                  link: "/python-100-days/Day66-80/73.深入浅出pandas-2",
                },
                {
                  text: "74.深入浅出pandas-3",
                  link: "/python-100-days/Day66-80/74.深入浅出pandas-3",
                },
                {
                  text: "75.深入浅出pandas-4",
                  link: "/python-100-days/Day66-80/75.深入浅出pandas-4",
                },
                {
                  text: "76.深入浅出pandas-5",
                  link: "/python-100-days/Day66-80/76.深入浅出pandas-5",
                },
                {
                  text: "77.深入浅出pandas-6",
                  link: "/python-100-days/Day66-80/77.深入浅出pandas-6",
                },
                {
                  text: "78.数据可视化-1",
                  link: "/python-100-days/Day66-80/78.数据可视化-1",
                },
                {
                  text: "79.数据可视化-2",
                  link: "/python-100-days/Day66-80/79.数据可视化-2",
                },
                {
                  text: "80.数据可视化-3",
                  link: "/python-100-days/Day66-80/80.数据可视化-3",
                },
              ],
            },
            {
              text: "Day81~90 - 机器学习",
              collapsed: true,
              items: [
                {
                  text: "81.浅谈机器学习",
                  link: "/python-100-days/Day81-90/81.浅谈机器学习",
                },
                {
                  text: "82.k最近邻算法",
                  link: "/python-100-days/Day81-90/82.k最近邻算法",
                },
                {
                  text: "83.决策树和随机森林",
                  link: "/python-100-days/Day81-90/83.决策树和随机森林",
                },
                {
                  text: "84.朴素贝叶斯算法",
                  link: "/python-100-days/Day81-90/84.朴素贝叶斯算法",
                },
                {
                  text: "85.回归模型",
                  link: "/python-100-days/Day81-90/85.回归模型",
                },
                {
                  text: "86.K-Means聚类算法",
                  link: "/python-100-days/Day81-90/86.K-Means聚类算法",
                },
                {
                  text: "87.集成学习算法",
                  link: "/python-100-days/Day81-90/87.集成学习算法",
                },
                {
                  text: "88.神经网络模型",
                  link: "/python-100-days/Day81-90/88.神经网络模型",
                },
                {
                  text: "89.自然语言处理入门",
                  link: "/python-100-days/Day81-90/89.自然语言处理入门",
                },
                {
                  text: "90.机器学习实战",
                  link: "/python-100-days/Day81-90/90.机器学习实战",
                },
              ],
            },
            {
              text: "Day91~100 - 团队项目开发",
              collapsed: true,
              items: [
                {
                  text: "91.团队项目开发的问题和解决方案",
                  link: "/python-100-days/Day91-100/91.团队项目开发的问题和解决方案",
                },
                {
                  text: "92.Docker容器技术详解",
                  link: "/python-100-days/Day91-100/92.Docker容器技术详解",
                },
                {
                  text: "93.MySQL性能优化",
                  link: "/python-100-days/Day91-100/93.MySQL性能优化",
                },
                {
                  text: "94.网络API接口设计",
                  link: "/python-100-days/Day91-100/94.网络API接口设计",
                },
                {
                  text: "95.使用Django开发商业项目",
                  link: "/python-100-days/Day91-100/95.使用Django开发商业项目",
                },
                {
                  text: "96.软件测试和自动化测试",
                  link: "/python-100-days/Day91-100/96.软件测试和自动化测试",
                },
                {
                  text: "97.电商网站技术要点剖析",
                  link: "/python-100-days/Day91-100/97.电商网站技术要点剖析",
                },
                {
                  text: "98.项目部署上线和性能调优",
                  link: "/python-100-days/Day91-100/98.项目部署上线和性能调优",
                },
                {
                  text: "99.面试中的公共问题",
                  link: "/python-100-days/Day91-100/99.面试中的公共问题",
                },
                {
                  text: "100.补充内容",
                  link: "/python-100-days/Day91-100/100.补充内容",
                },
              ],
            },
            {
              text: "番外篇",
              collapsed: true,
              items: [
                {
                  text: "PEP8风格指南",
                  link: "/python-100-days/extra/PEP8风格指南",
                },
                {
                  text: "Python之禅的最佳翻译",
                  link: "/python-100-days/extra/Python之禅的最佳翻译",
                },
                {
                  text: "Python参考书籍",
                  link: "/python-100-days/extra/Python参考书籍",
                },
                {
                  text: "Python容器使用小技巧",
                  link: "/python-100-days/extra/Python容器使用小技巧",
                },
                {
                  text: "Python编程惯例",
                  link: "/python-100-days/extra/Python编程惯例",
                },
                {
                  text: "一个小例子助你彻底理解协程",
                  link: "/python-100-days/extra/一个小例子助你彻底理解协程",
                },
                {
                  text: "使用Hexo搭建自己的博客",
                  link: "/python-100-days/extra/使用Hexo搭建自己的博客",
                },
                {
                  text: "分享几张学习路线图",
                  link: "/python-100-days/extra/分享几张学习路线图",
                },
                {
                  text: "如何快速驾驭 pandas 库",
                  link: "/python-100-days/extra/如何快速驾驭 pandas 库",
                },
                {
                  text: "常见反爬策略及应对方案",
                  link: "/python-100-days/extra/常见反爬策略及应对方案",
                },
                {
                  text: "我为什么选择了Python",
                  link: "/python-100-days/extra/我为什么选择了Python",
                },
                {
                  text: "接口文档参考示例",
                  link: "/python-100-days/extra/接口文档参考示例",
                },
                {
                  text: "用函数还是用复杂的表达式",
                  link: "/python-100-days/extra/用函数还是用复杂的表达式",
                },
                {
                  text: "知乎问题回答",
                  link: "/python-100-days/extra/知乎问题回答",
                },
                {
                  text: "那些年我们踩过的那些坑",
                  link: "/python-100-days/extra/那些年我们踩过的那些坑",
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
