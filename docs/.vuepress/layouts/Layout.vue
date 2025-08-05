<script setup>
import { Layout } from 'vuepress-theme-plume/client'
import { onMounted, ref } from 'vue'

// 当前标题和链接
const title = ref('')
const url = ref('')

onMounted(() => {
  title.value = document.title
  url.value = window.location.href
})

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(url.value)
    alert('链接已复制！')
  } catch (e) {
    alert('复制失败，请手动复制')
  }
}
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <div class="doc-footer-container">
        <div class="license-info">
          本文由作者按照
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
            CC-BY-4.0
          </a>
          进行授权
        </div>
        <div class="share-wrapper">
          <span class="share-label">分享:</span>

          <!-- Twitter 分享 fa6-brands:square-x-twitter-->
          <a
            :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(title + ' ' + url)}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-icon"
            title="分享到 Twitter"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NDgiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NnYzMjBjMCAzNS4zIDI4LjcgNjQgNjQgNjRoMzIwYzM1LjMgMCA2NC0yOC43IDY0LTY0Vjk2YzAtMzUuMy0yOC43LTY0LTY0LTY0em0yOTcuMSA4NEwyNTcuMyAyMzQuNkwzNzkuNCAzOTZoLTk1LjZMMjA5IDI5OC4xTDEyMy4zIDM5Nkg3NS44bDExMS0xMjYuOUw2OS43IDExNmg5OGw2Ny43IDg5LjVsNzguMi04OS41em0tMzcuOCAyNTEuNkwxNTMuNCAxNDIuOWgtMjguM2wxNzEuOCAyMjQuN2gyNi4zeiIvPjwvc3ZnPg=="
              alt="Twitter"
            />
          </a>

          <!-- 微博分享 -->
          <a
            :href="`https://service.weibo.com/share/share.php?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`"
            target="_blank"
            rel="noopener noreferrer"
            class="share-icon"
            title="分享到微博"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xMC44NzggMS4wOTNhNC4yMyA0LjIzIDAgMCAxIDQuMDMxIDEuMzA1YTQuMjIgNC4yMiAwIDAgMSAuODg2IDQuMTR2LjAwMWEuNjEyLjYxMiAwIDAgMS0xLjE2Ni0uMzc3YTMuMDEgMy4wMSAwIDAgMC0zLjQ5NS0zLjg3M2EuNjExLjYxMSAwIDEgMS0uMjU2LTEuMTk2TTMuNzUzIDkuNDY1Yy41NDgtMS4xMSAxLjk3Mi0xLjc0IDMuMjMzLTEuNDExYzEuMzA0LjMzOCAxLjk3MSAxLjU2OCAxLjQzNyAyLjc2NGMtLjU0MSAxLjIyMS0yLjA5NSAxLjg3NS0zLjQxNiAxLjQ0OWMtMS4yNzEtLjQxMS0xLjgxMi0xLjY3LTEuMjU0LTIuODAybTIuNjU4LjU2N2MuMTYuMDY2LjM2NS0uMDA5LjQ1OC0uMTY4Yy4wODgtLjE2LjAzLS4zNC0uMTI5LS4zOTdjLS4xNTYtLjA2Mi0uMzUzLjAxMy0uNDQ2LjE2OGMtLjA5LjE1NC0uMDQxLjMzMy4xMTcuMzk3bS0xLjYwNyAxLjMxNGMuNDEzLjE4OC45NjMuMDA5IDEuMjE5LS40Yy4yNTItLjQxMy4xMi0uODgzLS4yOTYtMS4wNjJjLS40MS0uMTcyLS45NC4wMDUtMS4xOTQuNDAyYy0uMjU2LjQtLjEzNS44NzQuMjcxIDEuMDYiLz48cGF0aCBkPSJtMTIuMDE0IDcuMjM4bC4wMDUuMDAxYy45MTkuMjg1IDEuOTQxLjk3NCAxLjkzOSAyLjE4OGMwIDIuMDA3LTIuODk1IDQuNTM1LTcuMjQ2IDQuNTM1QzMuMzkzIDEzLjk2MiAwIDEyLjM1MiAwIDkuNzA4YzAtMS4zODUuODc2LTIuOTg1IDIuMzg0LTQuNDkzQzQuNCAzLjE5OSA2Ljc1MSAyLjI4IDcuNjM0IDMuMTY1Yy4zOS4zOTIuNDI3IDEuMDY1LjE3NyAxLjg3Yy0uMTMyLjQwNS4zOC4xODIuMzguMTgyYzEuNjMtLjY4MiAzLjA1MS0uNzIyIDMuNTcuMDJjLjI3OC4zOTcuMjUyLjk1MS0uMDA0IDEuNTk0Yy0uMTE2LjI5My4wMzUuMzQuMjU3LjQwN20tMTAuNCAzLjEwMWMuMTcyIDEuNzM4IDIuNDYgMi45MzYgNS4xMDkgMi42NzRjMi42NDctLjI2IDQuNjU2LTEuODgzIDQuNDgyLTMuNjIzYy0uMTctMS43MzgtMi40NTgtMi45MzctNS4xMDctMi42NzRjLTIuNjQ3LjI2My00LjY1NiAxLjg4My00LjQ4NCAzLjYyM20xMS42ODEtNi40ODRhMi4wNiAyLjA2IDAgMCAwLTEuOTYyLS42MzRhLjUyNi41MjYgMCAxIDAgLjIxOSAxLjAzMWExLjAwOCAxLjAwOCAwIDAgMSAxLjE3IDEuMjk2YS41MjguNTI4IDAgMCAwIDEuMDA1LjMyNWEyLjA2IDIuMDYgMCAwIDAtLjQzMi0yLjAxOCIvPjwvZz48L3N2Zz4="
              alt="Weibo"
            />
          </a>

          <!-- 复制链接 -->
          <button class="share-icon" @click="copyLink" title="复制链接">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PGcgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJtMjE4LjM0IDExOS42bC0zNC43NCAzNC43NGE0Ni41OCA0Ni41OCAwIDAgMS00NC4zMSAxMi4yNmMtLjMxLjM0LS42Mi42Ny0uOTUgMWwtMzQuNzQgMzQuNzRhNDYuNjMgNDYuNjMgMCAxIDEtNjUuOTQtNjUuOTRsMzQuNzQtMzQuNzRhNDYuNiA0Ni42IDAgMCAxIDQ0LjMxLTEyLjI2Yy4zMS0uMzQuNjItLjY3IDEtMWwzNC42OS0zNC43NGE0Ni42MyA0Ni42MyAwIDAgMSA2NS45NCA2NS45NCIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCA4OC4yM2E1NC40MyA1NC40MyAwIDAgMS0xNiAzN0wxODkuMjUgMTYwYTU0LjI3IDU0LjI3IDAgMCAxLTM4LjYzIDE2aC0uMDVBNTQuNjMgNTQuNjMgMCAwIDEgOTYgMTE5Ljg0YTggOCAwIDAgMSAxNiAuNDVBMzguNjIgMzguNjIgMCAwIDAgMTUwLjU4IDE2MGEzOC40IDM4LjQgMCAwIDAgMjcuMzEtMTEuMzFsMzQuNzUtMzQuNzVhMzguNjMgMzguNjMgMCAwIDAtNTQuNjMtNTQuNjNsLTExIDExQTggOCAwIDAgMSAxMzUuNyA1OWwxMS0xMWE1NC42NSA1NC42NSAwIDAgMSA3Ny4zIDBhNTQuODYgNTQuODYgMCAwIDEgMTYgNDAuMjNtLTEzMSA5Ny40M2wtMTEgMTFBMzguNCAzOC40IDAgMCAxIDcwLjYgMjA4YTM4LjYzIDM4LjYzIDAgMCAxLTI3LjI5LTY1Ljk0TDc4IDEwNy4zMWEzOC42MyAzOC42MyAwIDAgMSA2NiAyOC40YTggOCAwIDAgMCA3Ljc4IDguMjJoLjIyYTggOCAwIDAgMCA4LTcuNzhBNTQuODYgNTQuODYgMCAwIDAgMTQ0IDk2YTU0LjY1IDU0LjY1IDAgMCAwLTc3LjI3IDBMMzIgMTMwLjc1QTU0LjYyIDU0LjYyIDAgMCAwIDcwLjU2IDIyNGE1NC4yOCA1NC4yOCAwIDAgMCAzOC42NC0xNmwxMS0xMWE4IDggMCAwIDAtMTEuMi0xMS4zNCIvPjwvZz48L3N2Zz4="
              alt="复制链接"
            />
          </button>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.doc-footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  color: var(--vp-c-text-3);
  font-size: 0.85em;
  margin-top: 1rem;
  padding-top: 1rem;
}

.license-info a {
  color: inherit;
  font-weight: bold;
}

.share-wrapper {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.share-label {
  color: var(--c-text-light);
}

.share-icon {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.share-icon:hover {
  opacity: 1;
}

.share-icon img {
  width: 20px;
  height: 20px;
  display: block;
}
</style>
