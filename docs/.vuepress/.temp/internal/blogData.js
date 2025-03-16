export const blogPostData = [{"path":"/article/b7vupd2z/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/03/15 11:18:33","lang":"zh-CN","excerpt":""},{"path":"/article/een8iz08/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/03/15 11:18:33","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
