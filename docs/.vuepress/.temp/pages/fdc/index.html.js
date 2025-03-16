import comp from "E:/Vuepress/my-project/docs/.vuepress/.temp/pages/fdc/index.html.vue"
const data = JSON.parse("{\"path\":\"/fdc/\",\"title\":\"房地产\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"房地产\",\"createTime\":\"2025/03/16 13:24:37\",\"permalink\":\"/fdc/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"notes/房地产/README.md\"}")
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
