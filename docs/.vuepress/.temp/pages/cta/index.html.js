import comp from "E:/Vuepress/my-project/docs/.vuepress/.temp/pages/cta/index.html.vue"
const data = JSON.parse("{\"path\":\"/cta/\",\"title\":\"CTA\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CTA\",\"createTime\":\"2025/03/15 14:33:01\",\"permalink\":\"/cta/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"notes/CTA/README.md\"}")
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
