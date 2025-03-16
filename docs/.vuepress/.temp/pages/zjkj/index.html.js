import comp from "E:/Vuepress/my-project/docs/.vuepress/.temp/pages/zjkj/index.html.vue"
const data = JSON.parse("{\"path\":\"/zjkj/\",\"title\":\"中级会计\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"中级会计\",\"createTime\":\"2025/03/15 11:32:32\",\"permalink\":\"/zjkj/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"notes/中级会计/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
