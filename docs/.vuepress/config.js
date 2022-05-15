module.exports = {
  title: 'STAR',
  description: 'Slow growth and rapid decline',
  // theme: 'reco',
  locales: {
    './': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // algolia: {
    //   apiKey: '95cad4fbd34836a479e9ce41286dea91',
    //   indexName: 'fugenfun',
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: '58GWPAXDZ1'
    // },
    // logo: '/images/logo.png',
      nav: [
          { text: '首页', link: '/' },
          { 
              text: 'Eureka的 JavaScript 博客', 
              items: [
                  { text: 'Github', link: 'https://github.com/F-gen' },
           
              ]
          }
      ],
      sidebar: [
          '/', //默认首页
        {
          title: '一.Book',
          collapsable: false, // 不折叠
          children: [
           '/handok/Book',
           '/handok/telegram',
          ],
        },
        {
          title: "二.Vue3",
          collapsable: false, 
          children: [
            '/vue/Vue3快速上手',
            '/vue/创建Vue3.0工程',
            '/vue/常用 Composition API',
            '/vue/其它 Composition API',
            '/vue/Composition API 的优势',
            '/vue/新的组件',
            '/vue/其他',
          ],
        },
        {
          title: "三.TypeScript",
          collapsable: false, 
          children: [
           {
            title: '初识 TypeScript', // 标题
            children:[
              '/TypeScript/chapter1/01_初识TS',
              '/TypeScript/chapter1/02_安装TS',
              '/TypeScript/chapter1/03_HelloWorld',
              '/TypeScript/chapter1/04_webpack打包',
            ]
           },{
            title: 'TypeScript 常用语法', // 标题
            children:[
              '/TypeScript/chapter2/1_type',
              '/TypeScript/chapter2/2_interface',
              '/TypeScript/chapter2/3_class',
              '/TypeScript/chapter2/4_function',
              '/TypeScript/chapter2/5_generic',
              '/TypeScript/chapter2/6_other',
            ]
           }

          ],
        }
      ]
  }
}
