module.exports = {
  title: 'STAR',
  description: 'Slow growth and rapid decline',
  theme: 'reco',
  
  themeConfig: {
    subSidebar: 'auto'
  },
  locales: {
    './': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
      nav: [
          { text: '首页', link: '/' },
          { 
              text: 'Eureka的 JavaScript 博客', 
              items: [
                  { text: 'Github', link: 'https://github.com/F-gen' },
           
              ]
          }
      ],
      subSidebar: 'auto', 
      sidebar: [
        {
            title: '欢迎学习',
            path: '/',
            collapsable: false, // 不折叠
            children: [
                { title: "Hello", path: "/" }
            ]
        },
        {
          title: "书籍",
          path: '/handok/Book',
          collapsable: false, // 不折叠
          children: [
            { title: "书籍Mark", path: "/handok/Book" },
           
          ],
        }
      ]
  }
}
