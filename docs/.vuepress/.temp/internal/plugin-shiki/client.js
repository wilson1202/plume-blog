import { enhanceTwoslash } from 'E:/Vuepress/my-project/node_modules/.pnpm/@vuepress-plume+plugin-shik_674379177ecfcd808934f847735e28c5/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/twoslash.js'
import { useCopyCode } from 'E:/Vuepress/my-project/node_modules/.pnpm/@vuepress-plume+plugin-shik_674379177ecfcd808934f847735e28c5/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'E:/Vuepress/my-project/node_modules/.pnpm/@vuepress-plume+plugin-shik_674379177ecfcd808934f847735e28c5/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  enhance({ app }) {
    enhanceTwoslash(app)
  },
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
