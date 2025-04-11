---
layout: home

# Hero section
hero:
  name: "Python学习指南"
  text: "从新手到大师的Python学习之路"
  tagline: 100天掌握Python核心技能，进阶数据科学和人工智能
  image:
    src: /python-logo.svg
    alt: Python Logo
  actions:
    - theme: brand
      text: 开始学习
      link: /python-100-days/
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/jackfrued/Python-100-Days

# Features section
features:
  - icon: 🚀
    title: 从零基础到进阶
    details: 无论你是编程新手还是有经验的开发者，这套教程都能帮你循序渐进地掌握Python编程
  - icon: 🧰
    title: 全面的应用领域
    details: 涵盖Web开发、数据分析、机器学习、网络爬虫等Python主流应用领域的实战内容
  - icon: 📊
    title: 丰富的实战案例
    details: 每个章节都包含丰富的实战案例，帮助你将所学知识应用到真实场景中
  - icon: 🌐
    title: 职业导向路径
    details: 结合当前Python热门就业方向，为不同兴趣和职业规划的学习者提供清晰的学习路径

# 添加统计信息区域
statistics:
  - number: "100+"
    text: 天完整课程
  - number: "300+"
    text: 个精选案例
  - number: "500+"
    text: 个代码示例
  - number: "1000+"
    text: 次问题解答

# 添加热门学习路径
learningPaths:
  title: 热门学习路径
  paths:
    - title: Web开发工程师
      icon: 🌐
      desc: 掌握Django框架，构建功能完善的Web应用
      link: /python-100-days/Day46-60/
    - title: 数据分析师
      icon: 📊
      desc: 精通数据处理与可视化，从数据中获取洞见
      link: /python-100-days/Day66-80/
    - title: 人工智能入门
      icon: 🤖
      desc: 学习机器学习基础，开发智能应用
      link: /python-100-days/Day81-90/
    - title: 爬虫工程师
      icon: 🕸️
      desc: 高效采集和处理网络数据
      link: /python-100-days/Day61-65/

# 代码示例区域
codeExample:
  title: Python代码示例
  code: |
    def hello_python():
        """Python学习之旅的第一步"""
        languages = ['Python', '让', '编程', '更', '简单']
        message = ' '.join(languages)
        
        # 输出消息
        print(f"欢迎来到Python的世界！{message}")
        
        # 列表推导式示例
        squares = [x**2 for x in range(10)]
        print(f"前10个数字的平方: {squares}")
        
        return "开始你的Python学习之旅吧！"
        
    # 调用函数
    result = hello_python()
---

<div class="custom-layout">
  <!-- 统计信息部分 -->
  <div class="stats-container">
    <div class="section-title">
      <h2>课程统计</h2>
    </div>
    <div class="stats-grid">
      <div v-for="stat in $frontmatter.statistics" class="stat-item">
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-text">{{ stat.text }}</div>
      </div>
    </div>
  </div>
  
  <!-- 热门学习路径部分 -->
  <div class="learning-paths-container">
    <div class="section-title">
      <h2>{{ $frontmatter.learningPaths.title }}</h2>
    </div>
    <div class="learning-paths-grid">
      <a v-for="path in $frontmatter.learningPaths.paths" :href="path.link" class="learning-path-card">
        <div class="path-icon">{{ path.icon }}</div>
        <div class="path-title">{{ path.title }}</div>
        <div class="path-desc">{{ path.desc }}</div>
      </a>
    </div>
  </div>
  
  <!-- 代码示例部分 -->
  <div class="code-example-container">
    <div class="section-title">
      <h2>{{ $frontmatter.codeExample.title }}</h2>
    </div>
    <div class="code-block">
      <pre><code>{{ $frontmatter.codeExample.code }}</code></pre>
    </div>
  </div>
</div>
