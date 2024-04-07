import { defineConfig } from 'vitepress'
import { nav } from './components/nav'
import { sidebar } from './components/sidebar'
import { socialLinks } from './components/socialLinks'

export default defineConfig({
  lang: 'zh-CN',
  title: 'NatholDallas',
  description: 'For Learning',
  srcDir: 'src',
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    }
  },
  themeConfig: {
    logo: 'https://vitepress.dev/vitepress-logo-mini.svg',
    editLink: {
      pattern: 'https://github.com/NatholDallas/natholdallas.github.io/edit/master/docs/src/:path',
      text: '在 Github 上编辑此页面'
    },
    search: {
      provider: 'local'
    },
    nav: nav,
    sidebar: sidebar,
    socialLinks: socialLinks
  }
})
