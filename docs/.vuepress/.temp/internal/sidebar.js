export const sidebar = {"/":{"/zjkj":{"items":"auto","prefix":"/notes/中级会计/"},"/cta":{"items":"auto","prefix":"/notes/CTA/"},"/cpa":{"items":"auto","prefix":"/notes/CPA/"},"/fdc":{"items":"auto","prefix":"/notes/房地产/"}},"__auto__":{"/notes/中级会计/":[{"text":"中级会计实务","items":[{"text":"第一章  总论","items":[{"text":"一、财务报告目标","link":"/zjkj/njdeb8zl/"},{"text":"二、会计信息质量要求","link":"/zjkj/yd8pnn8o/"}],"collapsed":false}],"collapsed":false}],"/notes/CTA/":[],"/notes/CPA/":[],"/notes/房地产/":[]},"__home__":{"/notes/中级会计/":"/zjkj/","/notes/CTA/":"/cta/","/notes/CPA/":"/cpa/","/notes/房地产/":"/fdc/"}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
