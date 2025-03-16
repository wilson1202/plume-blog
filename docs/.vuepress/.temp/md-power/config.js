import { defineClientConfig } from 'vuepress/client'
import Tabs from 'E:/Vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._b55b419918e37e60c89613274b9f69db/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'E:/Vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._b55b419918e37e60c89613274b9f69db/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'E:/Vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._b55b419918e37e60c89613274b9f69db/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'E:/Vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._b55b419918e37e60c89613274b9f69db/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import 'E:/Vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._b55b419918e37e60c89613274b9f69db/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
