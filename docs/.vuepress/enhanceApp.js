export default ({ router, Vue, isServer }) => {
  Vue.mixin({
    mounted() {
      // 不加 setTimeout 会有报错，但不影响效果
      setTimeout(() => {
        try {
          docsearch({
            appId: "58GWPAXDZ1",
            apiKey: "95cad4fbd34836a479e9ce41286dea91",
            indexName: "fugenfun",
            container: '.search-box',
            debug: false
          });
        } catch (e) {
          console.log(e);
        }
      }, 100)
    },
  });
};
