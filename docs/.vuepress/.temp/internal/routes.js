export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/een8iz08/\",\"/preview/markdown.html\":\"/article/b7vupd2z/\",\"/notes/CTA/\":\"/cta/\",\"/notes/CPA/\":\"/cpa/\",\"/notes/%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1/\":\"/zjkj/\",\"/notes/%E6%88%BF%E5%9C%B0%E4%BA%A7/\":\"/fdc/\",\"/notes/%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1/1.%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E5%AE%9E%E5%8A%A1/1.%E7%AC%AC%E4%B8%80%E7%AB%A0%20%20%E6%80%BB%E8%AE%BA/1.%E4%B8%80%E3%80%81%E8%B4%A2%E5%8A%A1%E6%8A%A5%E5%91%8A%E7%9B%AE%E6%A0%87.html\":\"/zjkj/njdeb8zl/\",\"/notes/%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1/1.%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%E5%AE%9E%E5%8A%A1/1.%E7%AC%AC%E4%B8%80%E7%AB%A0%20%20%E6%80%BB%E8%AE%BA/2.%E4%BA%8C%E3%80%81%E4%BC%9A%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%B4%A8%E9%87%8F%E8%A6%81%E6%B1%82.html\":\"/zjkj/yd8pnn8o/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/een8iz08/", { loader: () => import(/* webpackChunkName: "article_een8iz08_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/article/een8iz08/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/b7vupd2z/", { loader: () => import(/* webpackChunkName: "article_b7vupd2z_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/article/b7vupd2z/index.html.js"), meta: {"title":"Markdown"} }],
  ["/cta/", { loader: () => import(/* webpackChunkName: "cta_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/cta/index.html.js"), meta: {"title":"CTA"} }],
  ["/cpa/", { loader: () => import(/* webpackChunkName: "cpa_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/cpa/index.html.js"), meta: {"title":"CPA"} }],
  ["/zjkj/", { loader: () => import(/* webpackChunkName: "zjkj_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/zjkj/index.html.js"), meta: {"title":"中级会计"} }],
  ["/fdc/", { loader: () => import(/* webpackChunkName: "fdc_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/fdc/index.html.js"), meta: {"title":"房地产"} }],
  ["/zjkj/njdeb8zl/", { loader: () => import(/* webpackChunkName: "zjkj_njdeb8zl_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/zjkj/njdeb8zl/index.html.js"), meta: {"title":"一、财务报告目标"} }],
  ["/zjkj/yd8pnn8o/", { loader: () => import(/* webpackChunkName: "zjkj_yd8pnn8o_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/zjkj/yd8pnn8o/index.html.js"), meta: {"title":"二、会计信息质量要求"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/Vuepress/my-project/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
