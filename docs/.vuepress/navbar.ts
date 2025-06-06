import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  // { text: '首页', link: '/', icon: 'lets-icons:home-duotone' },
  { text: '博客', link: '/blog/', icon: 'solar:book-2-bold' },
  // { text: '分类', link: '/blog/categories/', icon: 'mingcute:classify-2-fill' },
  // { text: '标签', link: '/blog/tags/', icon: 'mingcute:tag-2-fill' },
  // { text: '归档', link: '/blog/archives/', icon: 'fluent:archive-16-filled' },
  {
    text: '笔记',
    icon: 'mingcute:book-3-fill',
    items: [
      { text: '中级会计', link: '/notes/中级会计/' },
      { text: 'CTA', link: '/notes/CTA/' },
      { text: 'CPA', link: '/notes/CPA/' }
    ]
  },
  // {
  //   text: '政策',
  //   icon: 'mingcute:building-4-fill',
  //   items: [
  //     { text: '房地产', link: '/notes/房地产/' }
  //   ]
  // },
  {
    text: '书单',
    icon: 'mingcute:building-4-fill',
    link: '/notes/书单/'
  },
  {
    text: '豆瓣',
    icon: 'mingcute:building-4-fill',
    link: '/notes/豆瓣/'
  }
])