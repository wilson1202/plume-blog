import comp from "E:/Vuepress/my-project/docs/.vuepress/.temp/pages/article/een8iz08/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/een8iz08/\",\"title\":\"自定义组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2025/03/15 11:18:33\",\"permalink\":\"/article/een8iz08/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"preview/custom-component.example.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10000,\"name\":\"preview\"}]}")
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
