import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// const demoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: 'auto',
// })

// 学习笔记
const zjkjNote = defineNoteConfig({
  dir: '中级会计',
  link: '/zjkj',
  sidebar: 'auto',
})

const ctaNote = defineNoteConfig({
  dir: 'CTA',
  link: '/cta',
  sidebar: 'auto',
})

const cpaNote = defineNoteConfig({
  dir: 'CPA',
  link: '/cpa',
  sidebar: 'auto',
})

// 政策笔记
const fdcNote = defineNoteConfig({
  dir: '房地产',
  link: '/fdc',
  sidebar: 'auto',
})

// 书单
const booksNote = defineNoteConfig({
  dir: '书单',
  link: '/books',
  sidebar: 'auto',
})

// 豆瓣
const doubanNote = defineNoteConfig({
  dir: '豆瓣',
  link: '/douban',
  sidebar: 'auto',
})


export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zjkjNote,ctaNote,cpaNote,fdcNote,booksNote,doubanNote],
})
