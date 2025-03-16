import comp from "E:/Vuepress/my-project/docs/.vuepress/.temp/pages/cpa/index.html.vue"
const data = JSON.parse("{\"path\":\"/cpa/\",\"title\":\"CPA\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CPA\",\"createTime\":\"2025/03/15 14:32:03\",\"permalink\":\"/cpa/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"notes/CPA/README.md\"}")
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
